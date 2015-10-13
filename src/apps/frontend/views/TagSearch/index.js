// local imports
import createSearchView from 'views/createSearchView'
import Tag from './Tag'


export default createSearchView({
    name: 'TagSearch',
    itemsKey: 'tags',
    store: 'tagStore',
    fetch: () => console.log('fetch tags from TagSearch'),
    getSearchFields(tag) {
        return [tag.name]
    },
    PreviewComponent: Tag,
})


// end of file
