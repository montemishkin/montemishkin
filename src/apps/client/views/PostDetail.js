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
            bannerColor: PropTypes.string,
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


    static defaultProps = {
        // TODO: pick a default post color
        // (maybe just brighten whatever is used for the PostSearch banner)
        bannerColor: 'transparent',
        // TODO: pick a default post image
        imageSrc: '',
    }


    render() {
        const {post} = this.props

        if (post) {
            return <Article {...post} />
        }
        return <NotFound />
    }
}