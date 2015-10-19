// local imports
import {FETCH_POSTS, FAIL_FETCH_POSTS, SET_POSTS} from 'actions/types'


export default (state, {type, payload, error} = {}) => {
    if (type === FETCH_POSTS) {
        return {
            ...state,
            isFetching: true,
            error: null,
        }
    }
    if (type === FAIL_FETCH_POSTS) {
        return {
            ...state,
            isFetching: false,
            error: payload,
        }
    }
    if (type === SET_POSTS) {
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
