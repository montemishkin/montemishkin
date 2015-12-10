// third party imports
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Helmet from 'react-helmet'
// local imports
import SearchView from 'components/SearchView'
import ArticlePreview from 'components/ArticlePreview'
import BlogLogo from 'components/Logos/Blog'
import {nestArticle} from 'util/nest'


function mapStateToProps({posts, tags}) {
    return {
        posts: posts.map(post => nestArticle(post, tags)),
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
            location: {query: {search: initialSearchText}},
            posts,
            ...unusedProps,
        } = this.props

        return (
            <div {...unusedProps}>
                <Helmet title='Blog' />
                <SearchView
                    bannerIcon={props => <BlogLogo {...props} />}
                    title='Blog'
                    subtitle='oh yeah.'
                    items={posts}
                    PreviewComponent={ArticlePreview}
                    initialSearchText={initialSearchText}
                    mapItemToSearchFields={({content, title, tags}) => [
                        content,
                        title,
                        ...tags.map(tag => tag.name),
                    ]}
                    sortEqualScores={
                        ({created: date1}, {created: date2}) => {
                            const {
                                day: day1,
                                month: month1,
                                year: year1,
                            } = date1
                            const {
                                day: day2,
                                month: month2,
                                year: year2,
                            } = date2
                            if (year1 > year2) {
                                return -1
                            } else if (year1 < year2) {
                                return 1
                            } else if (month1 > month2) {
                                return -1
                            } else if (month1 < month2) {
                                return 1
                            } else if (day1 > day2) {
                                return -1
                            } else if (day1 < day2) {
                                return 1
                            }
                            return 1
                        }
                    }
                />
            </div>
        )
    }
}
