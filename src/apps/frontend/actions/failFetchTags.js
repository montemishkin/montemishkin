export const FAIL_FETCH_TAGS = 'FAIL_FETCH_TAGS'

export default (error) => ({
    type: FAIL_FETCH_TAGS,
    error,
})
