// local imports
import createSearchView from 'views/createSearchView'
import ArticlePreview from 'components/ArticlePreview'


export default createSearchView({
    displayName: 'ProjectSearch',
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
    bannerTitle: 'Projects',
    bannerSubtitle: 'check em out.',
    bannerColor: '#F5FFC1',
    bannerImageSrc: '/static/images/bird-logo.png',
})
