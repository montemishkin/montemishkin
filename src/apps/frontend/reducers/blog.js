// local imports
import {FETCH_POSTS, FAIL_FETCH_POSTS, SET_POSTS} from 'actions/types'


export default (blog, {type, payload, error} = {}) => {
    if (type === FETCH_POSTS) {
        return {
            ...blog,
            is_fetching: true,
            error: null,
        }
    }
    if (type === FAIL_FETCH_POSTS) {
        return {
            ...blog,
            is_fetching: false,
            error: payload,
        }
    }
    if (type === SET_POSTS) {
        return {
            ...blog,
            is_fetching: false,
            has_fetched: true,
            error: null,
            posts: payload,
        }
    }
    return typeof blog !== 'undefined' ? blog : {
        error: null,
        is_fetching: false,
        has_fetched: false,
        posts: [],
    }
}


// end of file
