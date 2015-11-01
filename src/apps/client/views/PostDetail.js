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
        post: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    }


    render() {
        if (this.props.post) {
            return <Article {...this.props.post} />
        }
        return <NotFound />
    }
}
