// third party imports
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Helmet from 'react-helmet'
// local imports
import SearchView from 'components/SearchView'
import ArticlePreview from 'components/ArticlePreview'
import ProjectsLogo from 'components/Logos/Projects'
import {nestArticle} from 'util/nest'


function mapStateToProps({projects, tags}) {
    return {
        projects: projects.map(project => nestArticle(project, tags)),
    }
}


@connect(mapStateToProps)
export default class ProjectSearch extends Component {
    static propTypes = {
        location: PropTypes.shape({
            query: PropTypes.shape({
                search: PropTypes.string,
            }).isRequired,
        }).isRequired,
        projects: PropTypes.arrayOf(PropTypes.shape({
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
            projects,
            ...unusedProps,
        } = this.props

        return (
            <div {...unusedProps}>
                <Helmet title='Projects' />
                <SearchView
                    bannerIcon={props => <ProjectsLogo {...props} />}
                    title='Projects'
                    subtitle='check em out.'
                    items={projects}
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
