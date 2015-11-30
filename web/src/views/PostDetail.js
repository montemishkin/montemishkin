// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
// import {createSelector} from 'reselect'
// local imports
import NotFound from 'views/NotFound'
import Article from 'components/Article'
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
            // TODO: pick a default post icon
            let BannerIcon = props => <i {...props} className='fa fa-tag' />
            if (post.imageSrc) {
                BannerIcon = props => <img {...props} src={post.imageSrc} />
            }
            return (
                <Article
                    {...unusedProps}
                    {...post}
                    BannerIcon={BannerIcon}
                />
            )
        }
        return <NotFound {...unusedProps} />
    }
}
