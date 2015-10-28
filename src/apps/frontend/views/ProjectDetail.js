// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
// import {createSelector} from 'reselect'
// local imports
import NotFound from 'components/NotFound'
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
        project: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    }


    render() {
        if (this.props.project) {
            return <Article {...this.props.project} />
        }
        return <NotFound />
    }
}
