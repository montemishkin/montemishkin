// third party imports
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
// local imports
import SearchView from 'components/SearchView'
import ArticlePreview from 'components/ArticlePreview'
import {nestProject} from 'util/nest'
import colors from 'styles/colors'


function mapStateToProps({projects, tags}) {
    return {
        projects: projects.map(project => nestProject(project, tags)),
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
            projects,
        } = this.props

        return (
            <SearchView
                bannerImageSrc='/static/images/logo-projects.svg'
                bannerColor={colors.palette.sunburn.css()}
                title='Projects'
                subtitle='check em out.'
                items={projects}
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
