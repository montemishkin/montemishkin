// local imports
import ProjectStore from 'stores/ProjectStore'
import ProjectActions from 'actions/ProjectActions'
import createSearchView from 'components/createSearchView'
import ProjectPreview from './ProjectPreview'



export default createSearchView({
    name: 'ProjectSearch',
    items_key: 'projects',
    store: ProjectStore,
    fetch: ProjectActions.fetchProjects,
    getSearchFields(project) {
        return [
            // for now just do content, title, and tags
            project.content,
            project.title,
            ...project.tags.map(tag => tag.name),
        ]
    },
    PreviewComponent: ProjectPreview,
})


// end of file
