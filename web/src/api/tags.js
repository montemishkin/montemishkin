// local imports
import queryApi from './queryApi'
import tagFragment from './tagFragment'


export function queryApiForAllTags() {
    return queryApi(`
        query {
            tags {
                ...tagFragment
            }
        }
        ${tagFragment}
    `)
}


export function queryApiForTagsBySlug(...slugs) {
    // if no slugs provsluged
    if (slugs.length === 0) {
        // resolve to empty object
        return Promise.resolve({})
    }

    return queryApi(`
        query {
            tagsBySlug(slugs: ${JSON.stringify(slugs)}) {
                ...tagFragment
            }
        }
        ${tagFragment}
    `)
}
