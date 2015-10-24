// third party imports
import fetch from 'isomorphic-fetch'
// local imports
import ArticlePreview from 'components/ArticlePreview'
import createSearchView from 'views/createSearchView'
import fetchProjects from 'actions/fetchProjects'
import failFetchProjects from 'actions/failFetchProjects'
import setProjects from 'actions/setProjects'


export default createSearchView({
    name: 'ProjectSearch',
    storeKey: 'projects',
    fetch(dispatch) {
        dispatch(fetchProjects())

        fetch('/api/projects')
            .then(response => response.json())
            .then(projects => dispatch(setProjects(projects)))
            .catch(error => dispatch(failFetchProjects(error)))
    },
    getSearchFields(project) {
        return [
            // for now just do content, title, and tags
            project.content,
            project.title,
            ...project.tags.map(tag => tag.title),
        ]
    },
    PreviewComponent: ArticlePreview,
})
