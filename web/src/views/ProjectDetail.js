// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
import Helmet from 'react-helmet'
// import {createSelector} from 'reselect'
// local imports
import NotFound from 'views/NotFound'
import Article from 'components/Article'
import ProjectsLogo from 'components/Logos/Projects'
import {nestArticle} from 'util/nest'


function mapStateToProps({projects, tags}, {location: {pathname}}) {
    const desiredProject = projects.filter(project => project.url === pathname)[0]

    return {
        project: desiredProject && nestArticle(desiredProject, tags),
    }
}


@connect(mapStateToProps)
@radium
export default class ProjectDetail extends Component {
    static propTypes = {
        project: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({
            url: PropTypes.string.isRequired,
            bannerImage: PropTypes.shape({
                url: PropTypes.string,
            }),
            title: PropTypes.string.isRequired,
            subtitle: PropTypes.string,
            content: PropTypes.string.isRequired,
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
        })]),
    }


    render() {
        const {project, ...unusedProps} = this.props

        if (project) {
            let BannerIcon = radium(props => <ProjectsLogo {...props} />)
            if (project.bannerImage.url) {
                BannerIcon = radium(props => <img {...props} src={project.bannerImage.url} />)
            }

            return (
                <div {...unusedProps}>
                    <Helmet title={project.title} />
                    <Article
                        {...project}
                        BannerIcon={BannerIcon}
                    />
                </div>
            )
        }

        return <NotFound {...unusedProps} />
    }
}
