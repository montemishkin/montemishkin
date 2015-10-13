// local imports
import {FETCH_PROJECTS, FAIL_FETCH_PROJECTS, SET_PROJECTS} from 'actions/types'


export default (showcase, {type, payload, error} = {}) => {
    if (type === FETCH_PROJECTS) {
        return {
            ...showcase,
            isFetching: true,
            error: null,
        }
    }
    if (type === FAIL_FETCH_PROJECTS) {
        return {
            ...showcase,
            isFetching: false,
            error: payload,
        }
    }
    if (type === SET_PROJECTS) {
        return {
            ...showcase,
            isFetching: false,
            hasFetched: true,
            error: null,
            projects: payload,
        }
    }
    return typeof showcase !== 'undefined' ? showcase : {
        error: null,
        isFetching: false,
        hasFetched: false,
        projects: [],
    }
}


// end of file
