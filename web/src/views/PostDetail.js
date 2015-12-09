// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
import Helmet from 'react-helmet'
// import {createSelector} from 'reselect'
// local imports
import NotFound from 'views/NotFound'
import Article from 'components/Article'
import BlogLogo from 'components/Logos/Blog'
import {nestArticle} from 'util/nest'


// TODO: this should be a reselect selector
function mapStateToProps({posts, tags}, {location: {pathname}}) {
    const desiredPost = posts.filter(post => post.url === pathname)[0]

    return {
        post: desiredPost && nestArticle(desiredPost, tags),
    }
}


@connect(mapStateToProps)
@radium
export default class PostDetail extends Component {
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
