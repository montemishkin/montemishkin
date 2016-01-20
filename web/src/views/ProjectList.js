// third party imports
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Helmet from 'react-helmet'
import reduce from 'lodash/collection/reduce'
// local imports
import ListView from 'components/ListView'
import ArticlePreview from 'components/ArticlePreview'
import ProjectLogo from 'components/Logos/Projects'
import {nestArticle} from 'util/nest'
import sortDates from 'util/sortDates'
import {fetchAllIfNeeded} from 'store/ducks/projects'


class PostList extends Component {
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
        loadDateTime: PropTypes.number,
        isLoading: PropTypes.bool.isRequired,
        loadError: PropTypes.object,
    }


    render() {
        const {
            projects,
            loadDateTime,
            isLoading,
            loadError,
            dispatch,
            ...unusedProps,
        } = this.props

        return (
            <div {...unusedProps}>
                <Helmet title='Projects' />
                <ListView
                    bannerIcon={props => <ProjectLogo {...props} />}
                    title='Projects'
                    subtitle='check em out.'
                    items={projects}
                    PreviewComponent={ArticlePreview}
                    isLoading={isLoading}
                    loadDateTime={loadDateTime}
                    loadError={loadError}
                    reload={() => dispatch(fetchAllIfNeeded())}
                />
            </div>
        )
    }
}


// TODO: use reselect
function mapStateToProps(state) {
    const {
        projects: {
            items: projects,
            loadDateTime,
            isLoading,
            loadError,
        },
        tags: {
            items: tags,
        },
    } = state

    return {
        // map object of project items to array of projects
        projects: reduce(projects, (result, project) => [
            ...result,
            nestArticle(project, tags),
        // sort most recently created projects to front of array
        ], []).sort(({created: a}, {created: b}) => sortDates(a, b)),
        loadDateTime,
        isLoading,
        loadError,
    }
}


export default connect(mapStateToProps)(PostList)
