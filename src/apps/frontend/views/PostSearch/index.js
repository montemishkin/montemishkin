// local imports
import createSearchView from 'views/createSearchView'
import PostPreview from './PostPreview'


export default createSearchView({
    name: 'PostSearch',
    itemsKey: 'posts',
    store: 'blog',
    fetch: () => console.log('fetch posts from PostSearch'),
    getSearchFields(post) {
        return [
            // for now just do content, title, and tags
            post.content,
            post.title,
            ...post.tags.map(tag => tag.name),
        ]
    },
    PreviewComponent: PostPreview,
})


// end of file
