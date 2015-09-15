/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* common alt imports */
import connectToStores from 'alt/utils/connectToStores'
/* misc third party imports */
// import DisqusThread from 'react-disqus-thread'
/* local imports */
import styles from './styles'
import TagListInline from '../TagListInline'
import Date from '../Date'
import BlogPostStore from '../../stores/BlogPostStore'
import BlogPostActions from '../../actions/BlogPostActions'


/**
 * Single blog post view.
 * @class
 */
@connectToStores
@radium
class BlogPostView extends React.Component {
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


    render() {
        // default as if posts have not yet been loaded from server
        let title = 'Loading...'
        let content = (<img
            style={styles.image}
            alt='Loading Indicator'
            src='/static/images/spinner.gif'
        />)

        // if posts have been loaded
        if (this.props.has_loaded) {
            // if we found the right post
            if (typeof this.props.post !== 'undefined') {
                title = this.props.post.title
                content = (<div style={styles.post_container}>
                    <div style={styles.date_and_tag_list_wrapper}>
                        <div style={styles.creation_date}>
                            <Date date={this.props.post.creation_date} />
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
                </div>)
            // posts loaded but this post not found
            } else {
                title = 'Woops!'
                content = (<p style={styles.error}>
                    There is no blog post here!
                </p>)
            }
        }

        return (<div style={styles.container}>
            <div style={styles.title}>
                {title}
            </div>
            {content}
        </div>)
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
export default BlogPostView


// end of file
