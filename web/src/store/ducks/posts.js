// local imports
import createDuck from 'util/createDuck'
import {queryApiForAllPosts, queryApiForPostsBySlug} from 'api/posts'
import {mergeBySlug as mergeTagsBySlug} from './tags'


const duck = createDuck({
    prefix: 'posts',
    queryAll: queryApiForAllPosts,
    queryBySlug: queryApiForPostsBySlug,
    processData: (data, dispatch) => dispatch(mergeTagsBySlug(data.tags)),
    mapDataToItems: data => data.posts,
})


export const fetchAllIfNeeded = duck.fetchAllIfNeeded
export const fetchBySlugIfNeeded = duck.fetchBySlugIfNeeded
export const mergeAll = duck.mergeAll

export default duck.reducer
