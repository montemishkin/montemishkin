// local imports
import createSearchView from 'views/createSearchView'
import ArticlePreview from 'components/ArticlePreview'


export default createSearchView({
    name: 'ProjectSearch',
    storeKey: 'projects',
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
