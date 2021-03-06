// third party imports
import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {createSelector} from 'reselect'
import Helmet from 'react-helmet'
import filter from 'lodash/collection/filter'
// local imports
import ListView from 'components/ListView'
import ArticlePreview from 'components/ArticlePreview'
import BlogLogo from 'components/logos/Blog'
import nestPost from 'util/nestPost'
import sortDates from 'util/sortDates'
import {fetchAllIfNeeded} from 'store/ducks/posts'


function reload(dispatch) {
    dispatch(fetchAllIfNeeded())
}


function PostList({
    posts,
    loadDateTime,
    isLoading,
    loadError,
    dispatch,
}) {
    return (
        <div>
            <Helmet title='Blog' />
            <ListView
                BannerIcon={BlogLogo}
                title='Blog'
                subtitle='oh yeah.'
                items={posts}
                PreviewComponent={ArticlePreview}
                isLoading={isLoading}
                loadDateTime={loadDateTime}
                loadError={loadError}
                reload={reload.bind(null, dispatch)}
            />
        </div>
    )
}


PostList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        created: PropTypes.shape({
            year: PropTypes.number.isRequired,
            month: PropTypes.number.isRequired,
            day: PropTypes.number.isRequired,
        }).isRequired,
        tags: PropTypes.arrayOf(PropTypes.shape({
            url: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })).isRequired,
    })).isRequired,
    loadDateTime: PropTypes.number,
    isLoading: PropTypes.bool.isRequired,
    loadError: PropTypes.object,
}


const mapStateToProps = createSelector(
    state => state.posts.items,
    state => state.posts.loadDateTime,
    state => state.posts.isLoading,
    state => state.posts.loadError,
    state => state.tags.items,
    (posts, loadDateTime, isLoading, loadError, tags) => ({
        // filter out posts known to not exist (returns an array)
        posts: filter(posts, post => !post.doesNotExist && post.loadDateTime)
            // nest posts
            .map(post => nestPost(post, tags))
            // sort most recently created posts to front of array
            .sort(({created: a}, {created: b}) => sortDates(a, b)),
        loadDateTime,
        isLoading,
        loadError,
    })
)


export default connect(mapStateToProps)(PostList)
