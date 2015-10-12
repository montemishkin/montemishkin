// local imports
import BlogPostStore from 'stores/BlogPostStore'
import BlogPostActions from 'actions/BlogPostActions'
import createSearchView from 'components/createSearchView'
import BlogPostPreview from './BlogPostPreview'


export default createSearchView({
    name: 'BlogSearch',
    items_key: 'posts',
    store: BlogPostStore,
    fetch: BlogPostActions.fetchBlogPosts,
    getSearchFields(post) {
        return [
            // for now just do content, title, and tags
            post.content,
            post.title,
            ...post.tags.map(tag => tag.name),
        ]
    },
    PreviewComponent: BlogPostPreview,
})


// end of file
