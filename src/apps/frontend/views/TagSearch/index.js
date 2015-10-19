// third party imports
import fetch from 'isomorphic-fetch'
// local imports
import createSearchView from 'views/createSearchView'
import fetchTags from 'actions/fetchTags'
import failFetchTags from 'actions/failFetchTags'
import setTags from 'actions/setTags'
import Tag from './Tag'


export default createSearchView({
    name: 'TagSearch',
    storeKey: 'tags',
    fetch(dispatch) {
        dispatch(fetchTags())

        fetch('/api/tags')
            .then(response => response.json())
            .then(tags => dispatch(setTags(tags)))
            .catch(error => dispatch(failFetchTags(error)))
    },
    getSearchFields(tag) {
        return [tag.name]
    },
    PreviewComponent: Tag,
})


// end of file
