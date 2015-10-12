/* common react imports */
import React from 'react'
import radium from 'radium'
/* common alt imports */
import connectToStores from 'alt/utils/connectToStores'
/* misc third party imports */
// import DisqusThread from 'react-disqus-thread'
/* local imports */
import styles from './styles'
import TagListInline from 'components/TagListInline'
import FormattedDate from 'components/FormattedDate'
import Loader from 'components/Loader'
import BlogPostStore from 'stores/BlogPostStore'
import BlogPostActions from 'actions/BlogPostActions'


/**
 * Single blog post view.
 * @class
 */
@connectToStores
@radium
class BlogPost extends React.Component {
    static getStores() {
        return [BlogPostStore]
    }


    static getPropsFromStores({params}) {
        const store_state = BlogPostStore.getState()

        return {
            // only grab the post we are viewing
            post: store_state.posts.filter(
                (post) => post.slug === params.slug
            )[0],
            has_loaded: store_state.has_loaded,
            fetching: store_state.fetching,
            fetch_error: store_state.fetch_error,
        }
    }


    // see https://github.com/goatslacker/alt/blob/master/src/utils/connectToStores.js#L74
    static componentDidConnect({has_loaded}) {
        // if blog posts have not yet been loaded this session
        if (!has_loaded) {
            // fetch blog posts from server
            BlogPostActions.fetchBlogPosts()
        }
    }


    /**
     * Returns what `render` should return if we are still mid ajax load.
     */
    LoadingComponent() {
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
    FailureComponent({error}) {
        return (<div style={styles.container}>
            <h3 style={styles.title}>
                Woops!
            </h3>
            <p style={styles.error_message}>
                We had trouble reaching the server.
                Feel free to refresh the page, or wait for me to retry.
                Here is the error object: {error}
            </p>
        </div>)
    }


    /**
     * Returns what `render` should return if we have loaded and the desired
     * post was NOT found.
     */
    PostNotFoundComponent() {
        return (<div style={styles.container}>
            <h3 style={styles.title}>
                Hmm...
            </h3>
            <p style={styles.error_message}>
                There is no blog post here!
            </p>
        </div>)
    }


    render() {
        const {fetching, has_loaded, fetch_error, post} = this.props

        let SuccessComponent
        if (has_loaded && post) {
            const {title, creation_date, tags, content} = this.props.post

            SuccessComponent = () => (
                <div style={styles.container}>
                    <h3 style={styles.title}>
                        {title}
                    </h3>
                    <div style={styles.post_container}>
                        <div style={styles.date_and_tag_list_wrapper}>
                            <div style={styles.creation_date}>
                                <FormattedDate date={creation_date} />
                            </div>
                            <div style={styles.tag_list_wrapper}>
                                <TagListInline tags={tags} />
                            </div>
                        </div>
                        <div
                            style={styles.post_content}
                            dangerouslySetInnerHTML={{
                                __html: content,
                            }}
                        />
                    </div>
                </div>
            )
        } else {
            SuccessComponent = this.PostNotFoundComponent
        }

        return (
            <Loader
                is_fetching={fetching}
                has_fetched={has_loaded}
                error={fetch_error}
                reattempt_timeout={3000}
                fetch={BlogPostActions.fetchBlogPosts}
                error_content={this.FailureComponent}
                fetching_content={this.LoadingComponent}
                success_content={SuccessComponent}
            />
        )
    }
}


// <DisqusThread
//     shortname='montemishkin'
//     identifier={this.props.post.slug}
//     title={this.props.post.title}
//     url='http://www.example.com/example-thread'
//     categoryId='123456'
// />


// export component
export default BlogPost


// end of file
