/* common alt imports */
import alt from '../alt-instance'
/* misc third party imports */
import {ajax} from 'jquery'


/**
 * Actions for projects.
 * @class
 */
@alt.createActions
class ProjectActions {
    fetchProjects() {
        // dispatch before async to allow for loading state
        this.dispatch()
        setTimeout(() =>
        ajax({
            url: '/api/projects/',
            success: (projects) => this.actions.setProjects(projects),
            error: (...args) => this.actions.failFetchProjects(...args),
        })
        , 500)
    }


    setProjects(projects) {
        this.dispatch(projects)
    }


    failFetchProjects(...args) {
        this.dispatch(args)
    }
}


// export actions
export default ProjectActions


// end of file
