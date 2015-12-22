// third party imports
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Helmet from 'react-helmet'
// local imports
import ListView from 'components/ListView'
import ArticlePreview from 'components/ArticlePreview'
import BlogLogo from 'components/Logos/Blog'
import {nestArticle} from 'util/nest'


function mapStateToProps({posts, tags}) {
    return {
        posts: posts.map(post => nestArticle(post, tags)),
    }
}


@connect(mapStateToProps)
export default class PostList extends Component {
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
    }


    render() {
        const {
            posts,
            ...unusedProps,
        } = this.props

        return (
            <div {...unusedProps}>
                <Helmet title='Blog' />
                <ListView
                    bannerIcon={props => <BlogLogo {...props} />}
                    title='Blog'
                    subtitle='oh yeah.'
                    items={posts}
                    PreviewComponent={ArticlePreview}
                />
            </div>
        )
    }
}
