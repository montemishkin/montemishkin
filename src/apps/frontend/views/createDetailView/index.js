// third party imports
import React, {Component} from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
import {createSelector} from 'reselect'
// import DisqusThread from 'react-disqus-thread'
// local imports
import styles from './styles'
import Loader from 'components/Loader'


/**
 * Factory for searchable item detail view.
 * @arg {object} options - Allows for named arguments.
 * @arg {string} options.name - The display name for the returned react
 * component.
 * @arg {string} options.items_key - The name of the key to look for the items
 * from the store on.
 * @arg options.store - The store to connect the view to.
 * @arg {function} options.fetch - Function to call when we want to fetch from
 * server.
 * @arg {function} options.getItemContent - Given an item, return the rendered
 * content to display.
 */
export default ({name, store_key, fetch, items_key, getItemContent}) => {
    const selector = createSelector(
        // grab desired store off the state tree
        state => state[store_key],
        // grab item's slug off the component's props
        (state, props) => props.params.slug,
        createSelector(
            // grab the items list off the store
            store => store[items_key],
            // grab the other bits of the store
            store => store.is_fetching,
            store => store.has_fetched,
            store => store.error,
            // grab the slug
            (store, slug) => slug,
            (items, is_fetching, has_fetched, error, slug) => ({
                is_fetching,
                has_fetched,
                error,
                item: items.filter(item => item.slug === slug)[0],
            })
        )
    )

    @connect(selector)
    @radium
    class DetailView extends Component {
        static displayName = name


        // see https://github.com/goatslacker/alt/blob/master/src/utils/connectToStores.js#L74
        static componentDidConnect({has_fetched}) {
            // if items have not yet been loaded this session
            if (!has_fetched) {
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
            const {is_fetching, has_fetched, error, item} = this.props

            // content to display on successful load
            let success_content
            // if we have loaded and found the desired item
            if (has_fetched && item) {
                success_content = getItemContent(item)
            } else {
                success_content = this.item_not_found_content
            }

            return (
                <Loader
                    is_fetching={is_fetching}
                    has_fetched={has_fetched}
                    error={error}
                    reattempt_timeout={3000}
                    fetch={fetch}
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
