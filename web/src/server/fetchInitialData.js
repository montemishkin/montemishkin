// local imports
import willBeRendered from 'server/willBeRendered'
import PostDetail from 'routes/PostDetail'
import PostList from 'routes/PostList'
import TagDetail from 'routes/TagDetail'
import TagList from 'routes/TagList'
import {
    fetchBySlugIfNeeded as fetchPostsBySlug,
    fetchAllIfNeeded as fetchAllPosts,
} from 'store/ducks/posts'
import {
    fetchBySlugIfNeeded as fetchTagsBySlug,
    fetchAllIfNeeded as fetchAllTags,
} from 'store/ducks/tags'


export default function populateInitialData(dispatch, renderProps) {
    if (willBeRendered(PostDetail, renderProps)) {
        return dispatch(fetchPostsBySlug(renderProps.params.slug))
    }
    if (willBeRendered(PostList, renderProps)) {
        return dispatch(fetchAllPosts())
    }
    if (willBeRendered(TagDetail, renderProps)) {
        return Promise.all([
            dispatch(fetchTagsBySlug(renderProps.params.slug)),
            dispatch(fetchAllPosts()),
        ])
    }
    if (willBeRendered(TagList, renderProps)) {
        return Promise.all([
            dispatch(fetchAllTags()),
            dispatch(fetchAllPosts()),
        ])
    }
    return Promise.resolve({})
}
