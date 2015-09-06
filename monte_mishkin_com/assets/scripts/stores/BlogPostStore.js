/* common alt imports */
import alt from '../alt-instance'
/* local imports */
import BlogPostActions from '../actions/BlogPostActions'


/**
 * Store for blog posts.
 * @class
 */
@alt.createStore
class BlogPostStore {
    constructor() {
        this.state = {
            // list of posts
            posts: [],
            // true if there has ever been a successful fetch
            has_loaded: false,
            // true if mid fetch of data
            fetching: false,
            // error message (if any) from fetching data
            fetch_error: null,
        }

        this.bindActions(BlogPostActions)
    }


    /**
     * Indicate that we are in the fetching state.
     */
    onFetchBlogPosts() {
        this.setState({
            fetching: true,
            fetch_error: null,
        })
    }


    /**
     * Indicate failure to fetch documents from server.
     * @param {string} err - Error message to display.
     */
    onFailFetchBlogPosts(err) {
        this.setState({
            fetching: false,
            fetch_error: err,
        })
    }


    /**
     * Completely overwrite store's list of blog posts.
     * @arg {array} posts - List of blog posts.
     */
    onSetBlogPosts(posts) {
        this.setState({
            posts: posts,
            has_loaded: true,
            fetching: false,
            fetch_error: null,
        })
    }
}


// export store
export default BlogPostStore


// end of file
