// local imports
import {FETCH_TAGS, FAIL_FETCH_TAGS, SET_TAGS} from 'actions/types'


export default (tagStore, {type, payload, error} = {}) => {
    if (type === FETCH_TAGS) {
        return {
            ...tagStore,
            isFetching: true,
            error: null,
        }
    }
    if (type === FAIL_FETCH_TAGS) {
        return {
            ...tagStore,
            isFetching: false,
            error: payload,
        }
    }
    if (type === SET_TAGS) {
        return {
            ...tagStore,
            isFetching: false,
            hasFetched: true,
            error: null,
            tags: payload,
        }
    }
    return typeof tagStore !== 'undefined' ? tagStore : {
        error: null,
        isFetching: false,
        hasFetched: false,
        tags: [],
    }
}


// end of file
