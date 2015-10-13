// local imports
import {FETCH_TAGS, FAIL_FETCH_TAGS, SET_TAGS} from 'actions/types'


export default (tag_store, {type, payload, error} = {}) => {
    if (type === FETCH_TAGS) {
        return {
            ...tag_store,
            is_fetching: true,
            error: null,
        }
    }
    if (type === FAIL_FETCH_TAGS) {
        return {
            ...tag_store,
            is_fetching: false,
            error: payload,
        }
    }
    if (type === SET_TAGS) {
        return {
            ...tag_store,
            is_fetching: false,
            has_fetched: true,
            error: null,
            tags: payload,
        }
    }
    return typeof tag_store !== 'undefined' ? tag_store : {
        error: null,
        is_fetching: false,
        has_fetched: false,
        tags: [],
    }
}


// end of file
