// local imports
import queryApi from './queryApi'
import articleFragment from './articleFragment'


export function queryApiForAllPosts() {
    return queryApi(`
        query {
            posts {
                ...articleFragment
            }
        }
        ${articleFragment}
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
                ...articleFragment
            }
        }
        ${articleFragment}
    `)
}
