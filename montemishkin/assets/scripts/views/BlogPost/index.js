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


    static getPropsFromStores(props) {
        const store_state = BlogPostStore.getState()

        return {
            // only grab the post we are viewing
            post: store_state.posts.filter(
                (post) => post.slug === props.params.slug
            )[0],
            has_loaded: store_state.has_loaded,
            fetching: store_state.fetching,
            fetch_error: store_state.fetch_error,
        }
    }


    // see https://github.com/goatslacker/alt/blob/master/src/utils/connectToStores.js#L74
    static componentDidConnect(props) {
        // if blog posts have not yet been loaded this session
        if (!props.has_loaded) {
            // fetch blog posts from server
            BlogPostActions.fetchBlogPosts()
        }
    }


    /**
     * Returns what `render` should return if we are still mid ajax load.
     */
    getLoadingContent() {
        return (<div style={styles.container}>
            <div style={styles.loading_image_wrapper}>
                <img
                    style={styles.loading_image}
                    alt='Loading Indicator'
                    src='/static/images/spinner.gif'
                />
            </div>
        </div>)
    }


    /**
     * Returns what `render` should return if there was a failure in ajax fetch.
     */
    getFailureContent() {
        return (<div style={styles.container}>
            <h3 style={styles.title}>
                Woops!
            </h3>
            <p style={styles.error_message}>
                We had trouble reaching the server.
                Feel free to refresh the page, or wait for me to retry.
            </p>
        </div>)
    }


    /**
     * Returns what `render` should return if we have loaded and the desired
     * post was found.
     */
    getPostFoundContent() {
        return (<div style={styles.container}>
            <h3 style={styles.title}>
                {this.props.post.title}
            </h3>
            <div style={styles.post_container}>
                <div style={styles.date_and_tag_list_wrapper}>
                    <div style={styles.creation_date}>
                        <FormattedDate date={this.props.post.creation_date} />
                    </div>
                    <div style={styles.tag_list_wrapper}>
                        <TagListInline tags={this.props.post.tags} />
                    </div>
                </div>
                <div
                    style={styles.post_content}
                    dangerouslySetInnerHTML={{
                        __html: this.props.post.content,
                    }}
                />
            </div>
        </div>)
    }


    /**
     * Returns what `render` should return if we have loaded and the desired
     * post was NOT found.
     */
    getPostNotFoundContent() {
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
        // default as if posts have not yet been loaded from server
        let content = this.getLoadingContent()

        // if there has been an error in fetching from server
        if (this.props.fetch_error !== null) {
            content = this.getFailureContent()
            // try to fetch again (after waiting a few seconds)
            setTimeout(() => BlogPostActions.fetchBlogPosts(), 3000)
        // no error in fetching from server, posts have been loaded
        } else if (this.props.has_loaded) {
            // if we found the right post
            if (typeof this.props.post !== 'undefined') {
                content = this.getPostFoundContent()
            // posts loaded but this post not found
            } else {
                content = this.getPostNotFoundContent()
            }
        }

        return content
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
