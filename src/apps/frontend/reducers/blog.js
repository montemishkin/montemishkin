// local imports
import {FETCH_POSTS, FAIL_FETCH_POSTS, SET_POSTS} from 'actions/types'


export default (blog, {type, payload, error} = {}) => {
    if (type === FETCH_POSTS) {
        return {
            ...blog,
            isFetching: true,
            error: null,
        }
    }
    if (type === FAIL_FETCH_POSTS) {
        return {
            ...blog,
            isFetching: false,
            error: payload,
        }
    }
    if (type === SET_POSTS) {
        return {
            ...blog,
            isFetching: false,
            hasFetched: true,
            error: null,
            posts: payload,
        }
    }
    return typeof blog !== 'undefined' ? blog : {
        error: null,
        isFetching: false,
        hasFetched: false,
        posts: [],
    }
}


// end of file
