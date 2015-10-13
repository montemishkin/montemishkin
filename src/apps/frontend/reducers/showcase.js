// local imports
import {FETCH_PROJECTS, FAIL_FETCH_PROJECTS, SET_PROJECTS} from 'actions/types'


export default (showcase, {type, payload, error} = {}) => {
    if (type === FETCH_PROJECTS) {
        return {
            ...showcase,
            is_fetching: true,
            error: null,
        }
    }
    if (type === FAIL_FETCH_PROJECTS) {
        return {
            ...showcase,
            is_fetching: false,
            error: payload,
        }
    }
    if (type === SET_PROJECTS) {
        return {
            ...showcase,
            is_fetching: false,
            has_fetched: true,
            error: null,
            projects: payload,
        }
    }
    return typeof showcase !== 'undefined' ? showcase : {
        error: null,
        is_fetching: false,
        has_fetched: false,
        projects: [],
    }
}


// end of file
