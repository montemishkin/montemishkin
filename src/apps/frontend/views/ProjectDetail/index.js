// local imports
import createDetailView from 'views/createDetailView'
import Article from 'components/Article'



export default createDetailView({
    displayName: 'ProjectDetail',
    storeKey: 'projects',
    ItemComponent: Article,
})
