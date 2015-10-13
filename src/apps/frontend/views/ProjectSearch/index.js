// local imports
import createSearchView from 'views/createSearchView'
import ProjectPreview from './ProjectPreview'



export default createSearchView({
    name: 'ProjectSearch',
    itemsKey: 'projects',
    store: 'showcase',
    fetch: () => console.log('fetch projects from ProjectSearch'),
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
