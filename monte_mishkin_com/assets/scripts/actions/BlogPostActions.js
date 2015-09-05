/* common alt imports */
import alt from '../alt-instance'
/* misc third party imports */
import {ajax} from 'jquery'


/**
 * Actions for blog posts.
 * @class
 */
@alt.createActions
class BlogPostActions {
    fetchBlogPosts() {
        // dispatch before async to allow for loading state
        this.dispatch()
        ajax({
            url: '/api/blog-posts/',
            success: (posts) => this.actions.setBlogPosts(posts),
            error: (...args) => this.actions.failFetchBlogPosts(args),
        })
    }

    setBlogPosts(posts) {
        this.dispatch(posts)
    }

    failFetchBlogPosts(...args) {
        this.dispatch(args)
    }
}


// export actions
export default BlogPostActions


// end of file
