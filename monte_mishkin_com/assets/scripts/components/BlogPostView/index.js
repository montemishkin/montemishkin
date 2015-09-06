/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* common alt imports */
import connectToStores from 'alt/utils/connectToStores'
/* misc third party imports */
// import DisqusThread from 'react-disqus-thread'
import {kebabCase} from 'lodash'
/* local imports */
import styles from './styles'
import Paper from '../Paper'
import Loader from '../Loader'
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
            post: store_state.posts.filter(
                (post) =>
                    (post.creation_date === props.params.creation_date
                        && kebabCase(post.title) === props.params.slug)
            )[0],
            has_loaded: store_state.has_loaded,
            fetching: store_state.fetching,
            fetch_error: store_state.fetch_error,
        }
    }


    componentDidMount() {
        BlogPostActions.fetchBlogPosts()
    }


    render() {
        let title = 'Woops!'
        let content = (<p style={styles.error}>
            There is no blog post here!
        </p>)

        if (this.props.post || this.props.has_loaded) {
            title = this.props.post.title
            content = (
                <Loader
                    loading={this.props.fetching}
                    error={this.props.fetch_error
                        && `My deepest apologies.
                        There has been an error in loading this blog post.
                        Please try refreshing the page.
                        Or come back later.
                        Or let me know something happened.`
                    }
                >
                    <div style={styles.creation_date}>
                        {this.props.post.creation_date}
                    </div>
                    <div style={styles.tags}>
                        {this.props.post.tags}
                    </div>
                    <div style={styles.content}>
                        {this.props.post.content}
                    </div>
                </Loader>
            )
        }

        return (<Paper title={title}>
            {content}
        </Paper>)
    }
}


// <DisqusThread
//     shortname='montemishkin'
//     identifier={`${this.props.date}/${kebabCase(this.props.title)}`}
//     title={this.props.title}
//     url='http://www.example.com/example-thread'
//     categoryId='123456'
// />


// export component
export default BlogPostView


// end of file
