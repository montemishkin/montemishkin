// local imports
import createDetailView from 'views/createDetailView'
import Article from 'components/Article'


/**
 * Single blog post view.
 */
export default createDetailView({
    name: 'PostDetail',
    storeKey: 'posts',
    ItemContent: Article,
})
