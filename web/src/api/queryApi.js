// third party imports
import fetch from 'isomorphic-fetch'
import {normalize} from 'normalizr'
import mapValues from 'lodash/object/mapValues'
// local imports
import schema from './schema'
import settings from 'config/settings'


// returns api response from given query
export default query => {
    return fetch(settings.apiURL, {
        method: 'POST',
        // TODO: will I need 'cors' in production?
        mode: 'cors',
        headers: {
            'Content-Type': 'application/graphql',
            Accept: 'application/json',
        },
        body: query,
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
    }).then(data => normalize(data, schema).entities)
    // add url fields to posts and tags
    // TODO: this doesn't seem like the right place to do this...
    .then(data => ({
        ...data,
        posts: mapValues(data.posts, post => ({
            ...post,
            url: '/posts/' + post.slug,
        })),
        tags: mapValues(data.tags, tag => ({
            ...tag,
            url: '/tags/' + tag.slug,
        })),
    }))
}
