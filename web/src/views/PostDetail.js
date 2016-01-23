// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
import Helmet from 'react-helmet'
import find from 'lodash/collection/find'
// import {createSelector} from 'reselect'
// local imports
import NotFound from 'views/NotFound'
import Article from 'components/Article'
import BlogLogo from 'components/Logos/Blog'
import nestPost from 'util/nestPost'


class PostDetail extends Component {
    static propTypes = {
        post: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({
            url: PropTypes.string.isRequired,
            bannerImage: PropTypes.shape({
                url: PropTypes.string,
            }),
            title: PropTypes.string.isRequired,
            subtitle: PropTypes.string,
            content: PropTypes.string.isRequired,
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
        })]),
    }


    render() {
        const {post, ...unusedProps} = this.props

        // TODO: use `Loader`

        if (post) {
            let BannerIcon = radium(props => <BlogLogo {...props} />)
            if (post.bannerImage.url) {
                BannerIcon = radium(props => <img {...props} src={post.bannerImage.url} />)
            }
            return (
                <div {...unusedProps}>
                    <Helmet title={post.title} />
                    <Article
                        {...post}
                        BannerIcon={BannerIcon}
                    />
                </div>
            )
        }
        return <NotFound {...unusedProps} />
    }
}


// TODO: use reselect
function mapStateToProps(state, props) {
    const {posts: {items: posts}, tags: {items: tags}} = state
    const {location: {pathname}} = props

    const desiredPost = find(posts, post => post.url === pathname)

    return {
        post: desiredPost && nestPost(desiredPost, tags),
    }
}


export default connect(mapStateToProps)(radium(PostDetail))
