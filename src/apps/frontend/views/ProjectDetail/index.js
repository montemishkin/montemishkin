// local imports
import createDetailView from 'views/createDetailView'
import Article from 'components/Article'



export default createDetailView({
    name: 'ProjectDetail',
    storeKey: 'projects',
    ItemContent: Article,
})
