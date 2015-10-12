// local imports
import TagStore from 'stores/TagStore'
import TagActions from 'actions/TagActions'
import createSearchView from 'views/createSearchView'
import Tag from './Tag'


export default createSearchView({
    name: 'TagSearch',
    items_key: 'tags',
    store: TagStore,
    fetch: TagActions.fetchTags,
    getSearchFields(tag) {
        return [tag.name]
    },
    PreviewComponent: Tag,
})


// end of file
