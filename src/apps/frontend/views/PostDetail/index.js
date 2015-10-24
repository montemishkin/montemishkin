// third party imports
import fetch from 'isomorphic-fetch'
// local imports
import Article from 'components/Article'
import createDetailView from 'views/createDetailView'
import fetchPosts from 'actions/fetchPosts'
import failFetchPosts from 'actions/failFetchPosts'
import setPosts from 'actions/setPosts'


/**
 * Single blog post view.
 */
export default createDetailView({
    name: 'PostDetail',
    storeKey: 'posts',
    fetch(dispatch) {
        dispatch(fetchPosts())

        fetch('/api/posts')
            .then(response => response.json())
            .then(posts => dispatch(setPosts(posts)))
            .catch(error => dispatch(failFetchPosts(error)))
    },
    ItemContent: Article,
})
