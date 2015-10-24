// third party imports
import fetch from 'isomorphic-fetch'
// local imports
import Article from 'components/Article'
import createDetailView from 'views/createDetailView'
import fetchProjects from 'actions/fetchProjects'
import failFetchProjects from 'actions/failFetchProjects'
import setProjects from 'actions/setProjects'



export default createDetailView({
    name: 'ProjectDetail',
    storeKey: 'projects',
    fetch(dispatch) {
        dispatch(fetchProjects())

        fetch('/api/projects')
            .then(response => response.json())
            .then(projects => dispatch(setProjects(projects)))
            .catch(error => dispatch(failFetchProjects(error)))
    },
    ItemContent: Article,
})
