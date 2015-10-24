// third party imports
import fetch from 'isomorphic-fetch'
// local imports
import ArticlePreview from 'components/ArticlePreview'
import createSearchView from 'views/createSearchView'
import fetchPosts from 'actions/fetchPosts'
import failFetchPosts from 'actions/failFetchPosts'
import setPosts from 'actions/setPosts'


export default createSearchView({
    name: 'PostSearch',
    storeKey: 'posts',
    fetch(dispatch) {
        dispatch(fetchPosts())

        fetch('/api/posts')
            .then(response => response.json())
            .then(posts => dispatch(setPosts(posts)))
            .catch(error => dispatch(failFetchPosts(error)))
    },
    getSearchFields(post) {
        return [
            // for now just do content, title, and tags
            post.content,
            post.title,
            ...post.tags.map(tag => tag.title),
        ]
    },
    PreviewComponent: ArticlePreview,
})
