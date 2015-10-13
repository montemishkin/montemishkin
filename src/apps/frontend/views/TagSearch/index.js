// local imports
import createSearchView from 'views/createSearchView'
import Tag from './Tag'


export default createSearchView({
    name: 'TagSearch',
    items_key: 'tags',
    store: 'tag_store',
    fetch: () => console.log('fetch tags from TagSearch'),
    getSearchFields(tag) {
        return [tag.name]
    },
    PreviewComponent: Tag,
})


// end of file
