/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* common alt imports */
import connectToStores from 'alt/utils/connectToStores'
/* misc third party imports */
import DisqusThread from 'react-disqus-thread'
import {kebabCase} from 'lodash'
/* local imports */
import styles from './styles'
import Paper from '../Paper'
import BlogPostStore from '../../stores/BlogPostStore'
import BlogPostActions from '../../actions/BlogPostActions'


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
            post: store_state.posts.filter(
                (post) =>
                    (post.creation_date === props.params.creation_date
                        && kebabCase(post.title) === props.params.slug)
            )[0],
            fetching: store_state.fetching,
            fetch_error: store_state.fetch_error,
        }
    }


    componentDidMount() {
        BlogPostActions.fetchBlogPosts()
    }


    render() {
        let title = 'no post yet'
        let creation_date = 'no post yet'
        let tags = 'no post yet'
        let content = 'no post yet'
        if (this.props.post) {
            title = this.props.post.title
            creation_date = this.props.post.creation_date
            tags = this.props.post.tags
            content = this.props.post.content
        }
        return (<Paper title={title}>
            <p>
                fetching: {this.props.fetching}
            </p>
            <p>
                fetch_error: {this.props.fetch_error}
            </p>
            <div style={styles.creation_date}>
                {creation_date}
            </div>
            <div style={styles.tags}>
                {tags}
            </div>
            <div style={styles.content}>
                {content}
            </div>
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
export default BlogPost


// end of file
