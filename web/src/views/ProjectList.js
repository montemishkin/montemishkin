// third party imports
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Helmet from 'react-helmet'
// local imports
import ListView from 'components/ListView'
import ArticlePreview from 'components/ArticlePreview'
import ProjectsLogo from 'components/Logos/Projects'
import {nestArticle} from 'util/nest'


function mapStateToProps({projects, tags}) {
    return {
        projects: projects.map(project => nestArticle(project, tags)),
    }
}


@connect(mapStateToProps)
export default class ProjectList extends Component {
    static propTypes = {
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
            projects,
            ...unusedProps,
        } = this.props

        return (
            <div {...unusedProps}>
                <Helmet title='Projects' />
                <ListView
                    bannerIcon={props => <ProjectsLogo {...props} />}
                    title='Projects'
                    subtitle='check em out.'
                    items={projects}
                    PreviewComponent={ArticlePreview}
                />
            </div>
        )
    }
}
