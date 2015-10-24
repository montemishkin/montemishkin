// local imports
import createDetailView from 'views/createDetailView'
import Article from 'components/Article'


/**
 * Single blog post view.
 */
export default createDetailView({
    displayName: 'PostDetail',
    storeKey: 'posts',
    ItemComponent: Article,
})
