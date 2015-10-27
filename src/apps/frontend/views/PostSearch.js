// third party imports
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
// local imports
import SearchView from 'components/SearchView'
import ArticlePreview from 'components/ArticlePreview'
import {nestPost} from 'util/nest'
import colors from 'styles/colors'


function mapStateToProps({posts, tags}) {
    return {
        posts: posts.map(post => nestPost(post, tags)),
    }
}


@connect(mapStateToProps)
export default class PostSearch extends Component {
    static propTypes = {
        posts: PropTypes.arrayOf(PropTypes.object).isRequired,
        location: PropTypes.shape({
            query: PropTypes.shape({
                search: PropTypes.string,
            }).isRequired,
        }).isRequired,
    }


    render() {
        const {
            location: {query: {search: initialSearchText}},
            posts,
        } = this.props

        return (
            <SearchView
                bannerImageSrc='/static/images/bird-logo.png'
                bannerColor={colors.palette.skyBlue.css()}
                title='Blog'
                subtitle='oh yeah.'
                items={posts}
                PreviewComponent={ArticlePreview}
                initialSearchText={initialSearchText}
                mapItemToSearchFields={({content, title, tags}) => [
                    content,
                    title,
                    ...tags.map(tag => tag.title),
                ]}
            />
        )
    }
}
