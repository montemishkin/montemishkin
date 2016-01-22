// local imports
import createDuck from './createDuck'
import {queryApiForAllTags, queryApiForTagsBySlug} from 'api/tags'


const duck = createDuck({
    prefix: 'tags',
    queryAll: queryApiForAllTags,
    queryBySlug: queryApiForTagsBySlug,
    mapAllToItems: data => data.tags,
    mapBySlugToItems: data => data.tagsBySlug,
})


export const fetchAllIfNeeded = duck.fetchAllIfNeeded
export const fetchBySlugIfNeeded = duck.fetchBySlugIfNeeded
export const mergeAll = duck.mergeAll
export const mergeBySlug = duck.mergeBySlug

export default duck.reducer
