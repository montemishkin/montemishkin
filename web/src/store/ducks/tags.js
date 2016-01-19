// local imports
import createDuck from './createDuck'
import {queryApiForAllTags, queryApiForTagsById} from 'api/tags'


const duck = createDuck({
    prefix: 'tags',
    queryAll: queryApiForAllTags,
    queryById: queryApiForTagsById,
    mapAllToItems: data => data.tags,
    mapByIdToItems: data => data.tagsById,
})


export const fetchAllIfNeeded = duck.fetchAllIfNeeded
export const fetchByIdIfNeeded = duck.fetchByIdIfNeeded
export const mergeAll = duck.mergeAll
export const mergeById = duck.mergeById

export default duck.reducer
