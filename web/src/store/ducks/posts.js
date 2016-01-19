// local imports
import createDuck from './createDuck'
import {queryApiForAllPosts, queryApiForPostsById} from 'api/posts'
import {mergeById as mergeTagsById} from './tags'


const duck = createDuck({
    prefix: 'posts',
    queryAll: queryApiForAllPosts,
    queryById: queryApiForPostsById,
    processAll: (data, dispatch) => dispatch(mergeTagsById(data.tags)),
    mapAllToItems: data => data.posts,
    processById: (data, dispatch) => dispatch(mergeTagsById(data.tags)),
    mapByIdToItems: data => data.postsById,
})


export const fetchAllIfNeeded = duck.fetchAllIfNeeded
export const fetchByIdIfNeeded = duck.fetchByIdIfNeeded
export const mergeAll = duck.mergeAll

export default duck.reducer
