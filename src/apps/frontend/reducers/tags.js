// local imports
import {FETCH_TAGS, FAIL_FETCH_TAGS, SET_TAGS} from 'actions/types'


export default (state, {type, payload, error} = {}) => {
    if (type === FETCH_TAGS) {
        return {
            ...state,
            isFetching: true,
            error: null,
        }
    }
    if (type === FAIL_FETCH_TAGS) {
        return {
            ...state,
            isFetching: false,
            error: payload,
        }
    }
    if (type === SET_TAGS) {
        return {
            ...state,
            isFetching: false,
            hasFetched: true,
            error: null,
            items: payload,
        }
    }
    return typeof state !== 'undefined' ? state : {
        error: null,
        isFetching: false,
        hasFetched: false,
        items: [],
    }
}


// end of file
