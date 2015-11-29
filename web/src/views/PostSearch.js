// third party imports
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
// local imports
import SearchView from 'components/SearchView'
import ArticlePreview from 'components/ArticlePreview'
import BlogLogo from 'components/Logos/Blog'
import {nestPost} from 'util/nest'


function mapStateToProps({posts, tags}) {
    return {
        posts: posts.map(post => nestPost(post, tags)),
    }
}


@connect(mapStateToProps)
export default class PostSearch extends Component {
    static propTypes = {
        location: PropTypes.shape({
            query: PropTypes.shape({
                search: PropTypes.string,
            }).isRequired,
        }).isRequired,
        posts: PropTypes.arrayOf(PropTypes.shape({
            link: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            subtitle: PropTypes.string,
            content: PropTypes.string.isRequired,
            creationDate: PropTypes.string.isRequired,
            tags: PropTypes.arrayOf(PropTypes.shape({
                link: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
            })).isRequired,
        })).isRequired,
    }


    render() {
        const {
            location: {query: {search: initialSearchText}},
            posts,
            ...unusedProps,
        } = this.props

        return (
            <SearchView
                {...unusedProps}
                bannerIcon={props => <BlogLogo {...props} />}
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
