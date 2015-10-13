export const FAIL_FETCH_PROJECTS = 'FAIL_FETCH_PROJECTS'

export default (error) => ({
    type: FAIL_FETCH_PROJECTS,
    error,
})
