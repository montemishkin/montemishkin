// local imports
import createDuck from 'util/createDuck'
import {queryApiForAllTags, queryApiForTagsBySlug} from 'api/tags'


const duck = createDuck({
    prefix: 'tags',
    queryAll: queryApiForAllTags,
    queryBySlug: queryApiForTagsBySlug,
    mapDataToItems: data => data.tags,
})


export const fetchAllIfNeeded = duck.fetchAllIfNeeded
export const fetchBySlugIfNeeded = duck.fetchBySlugIfNeeded
export const mergeAll = duck.mergeAll
export const mergeBySlug = duck.mergeBySlug

export default duck.reducer
