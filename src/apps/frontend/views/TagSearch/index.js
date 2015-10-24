// local imports
import createSearchView from 'views/createSearchView'
import Tag from './Tag'


export default createSearchView({
    displayName: 'TagSearch',
    storeKey: 'tags',
    getSearchFields(tag) {
        return [tag.title]
    },
    PreviewComponent: Tag,
    bannerTitle: 'Tags',
    bannerSubtitle: 'snoop around.',
    bannerColor: '#FEDCBA',
    bannerImageSrc: '/static/images/bird-logo.png',
})
