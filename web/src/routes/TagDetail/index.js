// node imports
import path from 'path'
const {basename} = path
// third party imports
import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {createSelector} from 'reselect'
import Helmet from 'react-helmet'
import filter from 'lodash/collection/filter'
// local imports
import Tagle from './Tagle'
import NotFound from 'routes/NotFound'
import DetailView from 'components/DetailView'
import nestPost from 'util/nestPost'
import sortDates from 'util/sortDates'
import {fetchBySlugIfNeeded as fetchTagsBySlugIfNeeded} from 'store/ducks/tags'
import {fetchAllIfNeeded as fetchAllPostsIfNeeded} from 'store/ducks/posts'


function tryFetch(dispatch, pathname) {
    dispatch(fetchAllPostsIfNeeded())
    dispatch(fetchTagsBySlugIfNeeded(basename(pathname)))
}


function isFound(item) {
    return typeof item === 'undefined' || !item.doesNotExist
}


function Found({
    item = {isLoading: true},
    tryFetch: reload,
    ...unusedProps,
}) {
    return (
        <div {...unusedProps}>
            <Helmet title={item.name ? item.name : 'Loading...'} />
            <Tagle
                {...item}
                reload={reload}
            />
        </div>
    )
}


function TagDetail({
    tag,
    shouldTryFetch,
    dispatch,
    location: {pathname},
    ...unusedProps,
}) {
    return (
        <DetailView
            {...unusedProps}
            item={tag}
            shouldTryFetch={shouldTryFetch}
            tryFetch={tryFetch.bind(null, dispatch, pathname)}
            test={isFound}
            FoundComponent={Found}
            NotFoundComponent={NotFound}
        />
    )
}


TagDetail.propTypes = {
    tag: PropTypes.shape({
        url: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
        posts: PropTypes.arrayOf(
            PropTypes.shape({
                url: PropTypes.string,
                title: PropTypes.string,
                subtitle: PropTypes.string,
                created: PropTypes.shape({
                    year: PropTypes.number,
                    month: PropTypes.number,
                    day: PropTypes.number,
                }),
                tags: PropTypes.arrayOf(PropTypes.shape({
                    url: PropTypes.string,
                    name: PropTypes.string,
                    description: PropTypes.string,
                })),
            })
        ),
    }),
}


const mapStateToProps = createSelector(
    state => state.posts.items,
    state => state.tags.items,
    (_, props) => basename(props.location.pathname),
    state => state.posts.isLoading,
    state => state.posts.loadDateTime,
    state => state.posts.loadError,
    (posts, tags, slug, postsIsLoading, postsLoadDateTime, postsLoadError) => {
        const desiredTag = tags[slug]

        return {
            shouldTryFetch: !postsIsLoading && !postsLoadDateTime && !postsLoadError,
            tag: typeof desiredTag === 'undefined' ? void 0 : {
                ...desiredTag,
                // grab only posts with desired tag
                posts: filter(posts, post => post.tags.indexOf(slug) !== -1)
                    .map(post => nestPost(post, tags))
                    // sort most recently created posts to front of array
                    .sort(({created: a}, {created: b}) => sortDates(a, b)),
            },
        }
    }
)


export default connect(mapStateToProps)(TagDetail)
