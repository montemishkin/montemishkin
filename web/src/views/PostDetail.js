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
import {nestPost} from 'util/nest'


// TODO: this should be a reselect selector
function mapStateToProps({posts, tags}, {params: {slug}}) {
    const desiredPost = posts.filter(post => post.slug === slug)[0]

    return {
        post: desiredPost && nestPost(desiredPost, tags),
    }
}


@connect(mapStateToProps)
@radium
export default class PostDetail extends Component {
    static propTypes = {
        post: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({
            imageSrc: PropTypes.string,
            title: PropTypes.string.isRequired,
            subtitle: PropTypes.string,
            content: PropTypes.string.isRequired,
            creationDate: PropTypes.string.isRequired,
            tags: PropTypes.arrayOf(PropTypes.shape({
                link: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
            })).isRequired,
        })]),
    }


    render() {
        const {post, ...unusedProps} = this.props

        if (post) {
            let BannerIcon = radium(props => <BlogLogo {...props} />)
            if (post.imageSrc) {
                BannerIcon = radium(props => <img {...props} src={post.imageSrc} />)
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
