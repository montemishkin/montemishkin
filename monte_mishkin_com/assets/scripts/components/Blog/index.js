/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* common alt imports */
import connectToStores from 'alt/utils/connectToStores'
/* misc third party imports */
import {kebabCase} from 'lodash'
/* local imports */
import styles from './styles'
import Paper from '../Paper'
import Link from '../Link'
import BlogPostPreview from '../BlogPostPreview'
import BlogPostStore from '../../stores/BlogPostStore'
import BlogPostActions from '../../actions/BlogPostActions'


/**
 * Blog page view.
 * @class
 */
@connectToStores
@radium
class Blog extends React.Component {
    constructor(...args) {
        super(...args)

        this.state = {
            filter_text: this.props.params.creation_date || '',
        }
    }

    static getStores() {
        return [BlogPostStore]
    }


    static getPropsFromStores() {
        return BlogPostStore.getState()
    }


    componentDidMount() {
        BlogPostActions.fetchBlogPosts()
    }


    render() {
        // the things to search for
        const search_terms = this.state.filter_text.split(' ')

        const filtered_posts = this.props.posts.filter((post) => {
            // the things to search through
            const search_fields = [
                post.content,
                post.creation_date,
                // post.tags,
                post.title,
            ]

            for (const field of search_fields) {
                for (const term of search_terms) {
                    if (field.search(term) !== -1) {
                        return true
                    }
                }
            }

            return false
        })


        return (<Paper title={'Blog'}>
            <label style={styles.filter_label}>
                <span style={styles.filter_label_text}>
                    Search:
                </span>
                <input
                    type='text'
                    placeholder='search by title, content, keyword, date...'
                    style={styles.filter}
                    value={this.state.filter_text}
                    onChange={
                        (event) => this.setState({filter_text: event.target.value})
                    }
                />
            </label>
            <p>
                fetching: {this.props.fetching}
            </p>
            <p>
                fetch_error: {this.props.fetch_error}
            </p>
            <ul style={styles.post_list}>
                {filtered_posts.map((post) => {
                    const route_params = {
                        creation_date: post.creation_date,
                        slug: kebabCase(post.title),
                    }

                    return (<li style={styles.post_list_item} key={post.id}>
                        <Link to='blog-post' params={route_params}>
                            <BlogPostPreview
                                title={post.title}
                                creation_date={post.creation_date}
                                tags={post.tags}
                                content={post.content}
                            />
                        </Link>
                    </li>)
                })}
            </ul>
        </Paper>)
    }
}


// export component
export default Blog


// end of file
