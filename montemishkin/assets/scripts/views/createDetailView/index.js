// third party react imports
import React, {Component} from 'react'
import radium from 'radium'
import connectToStores from 'alt/utils/connectToStores'
// import DisqusThread from 'react-disqus-thread'
// local imports
import styles from './styles'
import TagListInline from 'components/TagListInline'
import FormattedDate from 'components/FormattedDate'
import Loader from 'components/Loader'
import BlogPostStore from 'stores/BlogPostStore'
import BlogPostActions from 'actions/BlogPostActions'


/**
 * Single blog post view.
 */
export default ({name, store, fetch, items_key, getItemContent}) => {
    @connectToStores
    @radium
    class DetailView extends React.Component {
        static displayName = name


        static getStores() {
            return [store]
        }


        static getPropsFromStores({params}) {
            const store_state = store.getState()

            return {
                // only grab the item we are viewing
                item: store_state[items_key].filter(
                    (item) => item.slug === params.slug
                )[0],
                has_loaded: store_state.has_loaded,
                fetching: store_state.fetching,
                fetch_error: store_state.fetch_error,
            }
        }


        // see https://github.com/goatslacker/alt/blob/master/src/utils/connectToStores.js#L74
        static componentDidConnect({has_loaded}) {
            // if items have not yet been loaded this session
            if (!has_loaded) {
                // fetch items from server
                fetch()
            }
        }


        /**
         * Returns what `render` should return if we are still mid ajax load.
         */
        get loading_content() {
            return (
                <div style={styles.container}>
                    <div style={styles.loading_image_wrapper}>
                        <img
                            style={styles.loading_image}
                            alt='Loading Indicator'
                            src='/static/images/spinner.gif'
                        />
                    </div>
                </div>
            )
        }


        /**
         * Returns what `render` should return if there was a failure in ajax fetch.
         */
        get failure_content() {
            return ({error}) => (
                <div style={styles.container}>
                    <h3 style={styles.title}>
                        Woops!
                    </h3>
                    <p style={styles.error_message}>
                        We had trouble reaching the server.
                        Feel free to refresh the page, or wait for me to retry.
                        Here is the error object: {error}
                    </p>
                </div>
            )
        }


        /**
         * Returns what `render` should return if we have loaded and the desired
         * post was NOT found.
         */
        get post_not_found_content() {
            return (
                <div style={styles.container}>
                    <h3 style={styles.title}>
                        Hmm...
                    </h3>
                    <p style={styles.error_message}>
                        There is nothing here!
                    </p>
                </div>
            )
        }


        render() {
            const {fetching, has_loaded, fetch_error, item} = this.props

            let success_content
            if (has_loaded && item) {
                success_content = getItemContent(item)
            } else {
                success_content = this.item_not_found_content
            }

            return (
                <Loader
                    is_fetching={fetching}
                    has_fetched={has_loaded}
                    error={fetch_error}
                    reattempt_timeout={3000}
                    fetch={BlogPostActions.fetchBlogPosts}
                    error_content={this.failure_content}
                    fetching_content={this.loading_content}
                    success_content={success_content}
                />
            )
        }
    }

    return DetailView
}


// <DisqusThread
//     shortname='montemishkin'
//     identifier={this.props.post.slug}
//     title={this.props.post.title}
//     url='http://www.example.com/example-thread'
//     categoryId='123456'
// />


// end of file
