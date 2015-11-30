// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
// import {createSelector} from 'reselect'
// local imports
import NotFound from 'views/NotFound'
import Article from 'components/Article'
import {nestProject} from 'util/nest'


// TODO: this should be a reselect selector
function mapStateToProps({projects, tags}, {params: {slug}}) {
    const desiredProject = projects.filter(project => project.slug === slug)[0]

    return {
        project: desiredProject && nestProject(desiredProject, tags),
    }
}


@connect(mapStateToProps)
@radium
export default class ProjectDetail extends Component {
    static propTypes = {
        project: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({
            imageSrc: PropTypes.string,
            title: PropTypes.string.isRequired,
            subtitle: PropTypes.string,
            content: PropTypes.string.isRequired,
            creationDate: PropTypes.string.isRequired,
            tags: PropTypes.arrayOf(PropTypes.shape({
                link: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
            })).isRequired,
        })]),
    }


    render() {
        const {project, ...unusedProps} = this.props

        if (project) {
            // TODO: pick a default project icon
            let BannerIcon = props => <i {...props} className='fa fa-tag' />
            if (project.imageSrc) {
                BannerIcon = props => <img {...props} src={project.imageSrc} />
            }
            return (
                <Article
                    {...unusedProps}
                    {...project}
                    BannerIcon={BannerIcon}
                />
            )
        }
        return <NotFound {...unusedProps} />
    }
}
