// local imports
import createSearchView from 'views/createSearchView'
import Tag from './Tag'


export default createSearchView({
    name: 'TagSearch',
    storeKey: 'tags',
    getSearchFields(tag) {
        return [tag.title]
    },
    PreviewComponent: Tag,
})
