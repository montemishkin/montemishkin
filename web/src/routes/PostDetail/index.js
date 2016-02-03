// node imports
import {basename} from 'path'
// third party imports
import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import Helmet from 'react-helmet'
import {createSelector} from 'reselect'
// local imports
import Article from './Article'
import NotFound from 'routes/NotFound'
import DetailView from 'components/DetailView'
import nestPost from 'util/nestPost'
import {fetchBySlugIfNeeded} from 'store/ducks/posts'


function tryFetch(dispatch, pathname) {
    dispatch(fetchBySlugIfNeeded(basename(pathname)))
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
            <Helmet title={item.title ? item.title : 'Loading...'} />
            <Article
                {...item}
                reload={reload}
            />
        </div>
    )
}


function PostDetail({
    post,
    dispatch,
    location: {pathname},
    ...unusedProps,
}) {
    return (
        <DetailView
            {...unusedProps}
            item={post}
            shouldTryFetch={typeof post === 'undefined'}
            tryFetch={tryFetch.bind(null, dispatch, pathname)}
            test={isFound}
            FoundComponent={Found}
            NotFoundComponent={NotFound}
        />
    )
}


PostDetail.propTypes = {
    post: PropTypes.shape({
        url: PropTypes.string,
        bannerImage: PropTypes.shape({
            url: PropTypes.string,
        }),
        title: PropTypes.string,
        subtitle: PropTypes.string,
        content: PropTypes.string,
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
    }),
}


const mapStateToProps = createSelector(
    state => state.posts.items,
    state => state.tags.items,
    (_, props) => basename(props.location.pathname),
    (posts, tags, slug) => ({
        // will be `undefined` if desired post not found
        post: nestPost(posts[slug], tags),
    })
)


export default connect(mapStateToProps)(PostDetail)
