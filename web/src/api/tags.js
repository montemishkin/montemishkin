// local imports
import queryApi from './queryApi'


export function queryApiForAllTags() {
    return queryApi(`
        query {
            tags {
                id
                url
                name
                description
            }
        }
    `)
}


export function queryApiForTagsById(...ids) {
    // if no ids provided
    if (ids.length === 0) {
        // resolve to empty object
        return Promise.resolve({})
    }

    return queryApi(`
        query {
            tagsById(ids: ${JSON.stringify(ids)}) {
                id
                url
                name
                description
            }
        }
    `)
}
