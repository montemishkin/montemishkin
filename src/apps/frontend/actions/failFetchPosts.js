export const FAIL_FETCH_POSTS = 'FAIL_FETCH_POSTS'

export default (error) => ({
    type: FAIL_FETCH_POSTS,
    error,
})
