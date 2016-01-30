// third party imports
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Helmet from 'react-helmet'
import filter from 'lodash/collection/filter'
// local imports
import ListView from 'components/ListView'
import ArticlePreview from 'components/ArticlePreview'
import BlogLogo from 'components/Logos/Blog'
import nestPost from 'util/nestPost'
import sortDates from 'util/sortDates'
import {fetchAllIfNeeded} from 'store/ducks/posts'


class PostList extends Component {
    static propTypes = {
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


    BannerIcon = (props) => <BlogLogo {...props} />


    reload = () => this.props.dispatch(fetchAllIfNeeded())


    render() {
        const {
            props: {
                posts,
                loadDateTime,
                isLoading,
                loadError,
                ...unusedProps,
            },
            BannerIcon,
            reload,
        } = this

        return (
            <div {...unusedProps}>
                <Helmet title='Blog' />
                <ListView
                    BannerIcon={BannerIcon}
                    title='Blog'
                    subtitle='oh yeah.'
                    items={posts}
                    PreviewComponent={ArticlePreview}
                    isLoading={isLoading}
                    loadDateTime={loadDateTime}
                    loadError={loadError}
                    reload={reload}
                />
            </div>
        )
    }
}


// TODO: use reselect
function mapStateToProps(state) {
    const {
        posts: {
            items: posts,
            loadDateTime,
            isLoading,
            loadError,
        },
        tags: {
            items: tags,
        },
    } = state

    return {
        // filter out posts known to not exist (returns an array)
        posts: filter(posts, post => !post.doesNotExist)
            // nest posts
            .map(post => nestPost(post, tags))
            // sort most recently created posts to front of array
            .sort(({created: a}, {created: b}) => sortDates(a, b)),
        loadDateTime,
        isLoading,
        loadError,
    }
}


export default connect(mapStateToProps)(PostList)
