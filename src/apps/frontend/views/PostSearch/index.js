// local imports
import createSearchView from 'views/createSearchView'
import ArticlePreview from 'components/ArticlePreview'


export default createSearchView({
    displayName: 'PostSearch',
    storeKey: 'posts',
    getSearchFields(post) {
        return [
            // for now just do content, title, and tags
            post.content,
            post.title,
            ...post.tags.map(tag => tag.title),
        ]
    },
    PreviewComponent: ArticlePreview,
    bannerTitle: 'Blog',
    bannerSubtitle: 'oh yeah.',
    bannerColor: '#8CB2FF',
    bannerImageSrc: '/static/images/bird-logo.png',
})
