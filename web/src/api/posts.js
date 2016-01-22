// local imports
import queryApi from './queryApi'
import postFragment from './postFragment'
import tagFragment from './tagFragment'


export function queryApiForAllPosts() {
    return queryApi(`
        query {
            posts {
                ...postFragment
            }
        }
        ${postFragment}
        ${tagFragment}
    `)
}


export function queryApiForPostsBySlug(...slugs) {
    // if no slugs provided
    if (slugs.length === 0) {
        // resolve to empty object
        return Promise.resolve({})
    }

    return queryApi(`
        query {
            postsBySlug(slugs: ${JSON.stringify(slugs)}) {
                ...postFragment
            }
        }
        ${postFragment}
        ${tagFragment}
    `)
}
