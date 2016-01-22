// local imports
import createDuck from './createDuck'
import {queryApiForAllPosts, queryApiForPostsBySlug} from 'api/posts'
import {mergeBySlug as mergeTagsBySlug} from './tags'


const duck = createDuck({
    prefix: 'posts',
    queryAll: queryApiForAllPosts,
    queryBySlug: queryApiForPostsBySlug,
    processAll: (data, dispatch) => dispatch(mergeTagsBySlug(data.tags)),
    mapAllToItems: data => data.posts,
    processBySlug: (data, dispatch) => dispatch(mergeTagsBySlug(data.tags)),
    mapBySlugToItems: data => data.postsBySlug,
})


export const fetchAllIfNeeded = duck.fetchAllIfNeeded
export const fetchBySlugIfNeeded = duck.fetchBySlugIfNeeded
export const mergeAll = duck.mergeAll

export default duck.reducer
