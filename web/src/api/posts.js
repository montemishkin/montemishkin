// local imports
import queryApi from './queryApi'
import postFragment from './postFragment'


export function queryApiForAllPosts() {
    return queryApi(`
        query {
            posts {
                ...postFragment
            }
        }
        ${postFragment}
    `)
}


export function queryApiForPostsById(...ids) {
    // if no ids provided
    if (ids.length === 0) {
        // resolve to empty object
        return Promise.resolve({})
    }

    return queryApi(`
        query {
            postsById(ids: ${JSON.stringify(ids)}) {
                ...postFragment
            }
        }
        ${postFragment}
    `)
}
