// local imports
import {FETCH_PROJECTS, FAIL_FETCH_PROJECTS, SET_PROJECTS} from 'actions/types'


export default (state, {type, payload, error} = {}) => {
    if (type === FETCH_PROJECTS) {
        return {
            ...state,
            isFetching: true,
            error: null,
        }
    }
    if (type === FAIL_FETCH_PROJECTS) {
        return {
            ...state,
            isFetching: false,
            error,
        }
    }
    if (type === SET_PROJECTS) {
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
