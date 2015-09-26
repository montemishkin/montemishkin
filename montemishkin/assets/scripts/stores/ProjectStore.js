/* common alt imports */
import alt from '../alt-instance'
/* local imports */
import ProjectActions from '../actions/ProjectActions'


/**
 * Store for blog projects.
 * @class
 */
@alt.createStore
class ProjectStore {
    constructor() {
        this.state = {
            // list of projects
            projects: [],
            // true if there has ever been a successful fetch
            has_loaded: false,
            // true if mid fetch of data
            fetching: false,
            // error message (if any) from fetching data
            fetch_error: null,
        }

        this.bindActions(ProjectActions)
    }


    /**
     * Indicate that we are in the fetching state.
     */
    onFetchProjects() {
        this.setState({
            fetching: true,
            fetch_error: null,
        })
    }


    /**
     * Indicate failure to fetch projects from server.
     * @param {string} err - Error message to display.
     */
    onFailFetchProjects(err) {
        this.setState({
            fetching: false,
            fetch_error: err,
        })
    }


    /**
     * Completely overwrite store's list of projects.
     * @arg {array} projects - List of projects.
     */
    onSetProjects(projects) {
        this.setState({
            projects: projects,
            has_loaded: true,
            fetching: false,
            fetch_error: null,
        })
    }
}


// export store
export default ProjectStore


// end of file
