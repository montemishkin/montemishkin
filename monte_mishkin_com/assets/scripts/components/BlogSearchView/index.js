/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* common alt imports */
import connectToStores from 'alt/utils/connectToStores'
/* local imports */
import styles from './styles'
import Paper from '../Paper'
import Loader from '../Loader'
import BlogPostPreview from '../BlogPostPreview'
import BlogPostStore from '../../stores/BlogPostStore'
import BlogPostActions from '../../actions/BlogPostActions'


/**
 * Blog page view.
 * @class
 */
@connectToStores
@radium
class BlogSearchView extends React.Component {
    constructor(...args) {
        super(...args)

        this.state = {
            search_text: this.props.query.filter || '',
        }
    }

    static getStores() {
        return [BlogPostStore]
    }


    static getPropsFromStores() {
        return BlogPostStore.getState()
    }


    static componentDidConnect() {
        BlogPostActions.fetchBlogPosts()
    }

    componentWillReceiveProps(props) {
        this.setState({
            search_text: props.query.filter || '',
        })
    }


    render() {
        // things to search for
        const search_terms = this.state.search_text.trim().split(' ')

        // posts to display
        const filtered_posts = this.props.posts.filter((post) => {
            // things to search through
            const search_fields = [
                // for now just do content, title, and tags
                post.content,
                post.title,
                ...post.tags.map(tag => tag.name),
            ]

            for (const field of search_fields) {
                for (const term of search_terms) {
                    if (field.search(term) !== -1) {
                        return true
                    }
                }
            }

            return false
        }).sort((a, b) => a.creation_date < b.creation_date)

        let post_list_or_message = (<p style={styles.message}>
            Sorry!  No posts yet...
        </p>)

        if (this.props.posts.length !== 0) {
            post_list_or_message = (<p style={styles.message}>
                Sorry!  No search results.
            </p>)
        }

        if (filtered_posts.length !== 0) {
            post_list_or_message = (<ul style={styles.post_list}>
                {filtered_posts.map((post) => {
                    return (<li style={styles.post_list_item} key={post.id}>
                        <BlogPostPreview
                            title={post.title}
                            creation_date={post.creation_date}
                            tags={post.tags}
                            content={post.content}
                        />
                    </li>)
                })}
            </ul>)
        }

        return (<Paper title='Blog'>
            <label style={styles.search_bar_label}>
                <span style={styles.search_bar_label_text}>
                    Search:
                </span>
                <input
                    type='text'
                    placeholder='search by title???..?>?.??'
                    style={styles.search_bar}
                    value={this.state.search_text}
                    onChange={(event) =>
                        this.setState({search_text: event.target.value})
                    }
                />
            </label>
            <Loader
                loading={this.props.fetching}
                error={this.props.fetch_error
                    && `My deepest apologies.
                    There has been an error in loading the blog posts.
                    Please try refreshing the page.
                    Or come back later.
                    Or let me know something happened.`
                }
            >
                {post_list_or_message}
            </Loader>
        </Paper>)
    }
}


// export component
export default BlogSearchView


// end of file
