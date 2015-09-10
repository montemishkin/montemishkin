/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* common alt imports */
import connectToStores from 'alt/utils/connectToStores'
/* local imports */
import styles from './styles'
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


    // see https://github.com/goatslacker/alt/blob/master/src/utils/connectToStores.js#L74
    static componentDidConnect(props) {
        // if blog posts have not yet been loaded this session
        if (!props.has_loaded) {
            // fetch blog posts from server
            BlogPostActions.fetchBlogPosts()
        }
    }


    componentWillReceiveProps(props) {
        this.setState({
            search_text: props.query.filter || '',
        })
    }


    getFilteredPosts() {
        // strings to search for
        const search_terms = this.state.search_text.trim().split(' ')
        // return filtered, sorted posts
        return this.props.posts.filter((post) => {
            // strings to search through
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
        // sort by creation date, with more recent posts first
        }).sort((a, b) => a.creation_date < b.creation_date)
    }


    render() {
        // default as if posts have not yet been loaded from server
        let content = (<img
            style={styles.image}
            alt='Loading Indicator'
            src='/static/images/spinner.gif'
        />)

        // if posts have been loaded from server
        if (this.props.has_loaded) {
            // default as if there are no posts
            content = (<span style={styles.no_post_message}>
                There are no blog posts!
            </span>)

            // if there are any posts
            if (this.props.posts.length !== 0) {
                // filter out which posts to display
                let filtered_posts = this.getFilteredPosts()

                // default as if no posts survived filter
                content = (<span style={styles.no_search_result_message}>
                    No search results!
                </span>)

                // if any posts survived filter
                if (filtered_posts.length !== 0) {
                    content = (<ul style={styles.post_list}>
                        {filtered_posts.map((post) => (
                            <li
                                style={styles.post_list_item}
                                key={post.id}
                            >
                                <BlogPostPreview
                                    title={post.title}
                                    creation_date={post.creation_date}
                                    tags={post.tags}
                                    content={post.content}
                                />
                            </li>
                        ))}
                    </ul>)
                }
            }
        }

        return (<div style={styles.container}>
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
            <div style={styles.content}>
                {content}
            </div>
        </div>)
    }
}


// export component
export default BlogSearchView


// end of file
