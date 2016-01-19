// local imports
import queryApi from './queryApi'
import articleFragment from './articleFragment'


export function queryApiForAllProjects() {
    return queryApi(`
        query {
            projects {
                ...articleFragment
            }
        }
        ${articleFragment}
    `)
}


export function queryApiForProjectsById(...ids) {
    // if no ids provided
    if (ids.length === 0) {
        // resolve to empty object
        return Promise.resolve({})
    }

    return queryApi(`
        query {
            projectsById(ids: ${JSON.stringify(ids)}) {
                ...articleFragment
            }
        }
        ${articleFragment}
    `)
}
