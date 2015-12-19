// third party imports
import fetch from 'isomorphic-fetch'
import {normalize, Schema, arrayOf} from 'normalizr'
import reduce from 'lodash/collection/reduce'


// TODO: this seems like the wrong way to do this...
// name of host to use when forming URL's
let adminURL = 'localhost:8001'
// if we are in production environment
if (process.env.NODE_ENV === 'production') {
    adminURL = 'admin.monte.mishkin.com'
}


// create normalizr schema
const tagSchema = new Schema('tags')
const postSchema = new Schema('posts')
postSchema.define({
    tags: arrayOf(tagSchema),
})
const projectSchema = new Schema('projects')
projectSchema.define({
    tags: arrayOf(tagSchema),
})
const normalizrSchema = {
    projects: arrayOf(projectSchema),
    posts: arrayOf(postSchema),
}


// returns api response from given query
export function queryAPI(query) {
    // TODO: this url should not be hardcoded here
    return fetch(`http://${adminURL}/query/?query=${query}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
        },
    // parse response into json
    }).then(body => body.json())
    // check for graphql errors and then grab the response data
    .then(({data, errors: graphqlErrors}) => {
        if (graphqlErrors) {
            // TODO: figure out what to actually do with this error
            /* eslint-disable no-console */
            console.log('error fetching initial data: ', graphqlErrors)
            /* eslint-enable no-console */
        }
        return data
    // normalize nested data structure
    }).then(data => normalize(data, normalizrSchema).entities)
    // convert objects with integer keys to arrays
    .then(startData => reduce(startData, (endData, val, key) => ({
        ...endData,
        [key]: reduce(val, (list, entry) => list.concat(entry), []),
    }), {}))
}
