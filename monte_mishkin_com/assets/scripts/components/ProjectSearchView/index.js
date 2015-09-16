/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* common alt imports */
import connectToStores from 'alt/utils/connectToStores'
/* local imports */
import styles from './styles'
import ProjectList from '../ProjectList'
import ProjectStore from '../../stores/ProjectStore'
import ProjectActions from '../../actions/ProjectActions'


/**
 * Projects page view.
 * @class
 */
@connectToStores
@radium
class ProjectSearchView extends React.Component {
    constructor(...args) {
        super(...args)

        this.state = {
            search_text: this.props.query.search || '',
        }
    }


    static getStores() {
        return [ProjectStore]
    }


    static getPropsFromStores() {
        return ProjectStore.getState()
    }


    // see https://github.com/goatslacker/alt/blob/master/src/utils/connectToStores.js#L74
    static componentDidConnect(props) {
        // if projects have not yet been loaded this session
        if (!props.has_loaded) {
            // fetch projects from server
            ProjectActions.fetchProjects()
        }
    }


    componentWillReceiveProps(props) {
        this.setState({
            search_text: props.query.search || '',
        })
    }


    getFilteredProjects() {
        // strings to search for
        const search_terms = this.state.search_text.trim().split(' ')
        // return filtered, sorted projects
        return this.props.projects.filter((project) => {
            // strings to search through
            const search_fields = [
                // for now just do content, title, and tags
                project.content,
                project.title,
                ...project.tags.map(tag => tag.name),
            ]

            for (const field of search_fields) {
                for (const term of search_terms) {
                    if (field.search(term) !== -1) {
                        return true
                    }
                }
            }

            return false
        // sort by creation date, with more recent projects first
        }).sort((a, b) => a.creation_date < b.creation_date)
    }


    render() {
        // default as if projects have not yet been loaded from server
        let content = (<img
            style={styles.image}
            alt='Loading Indicator'
            src='/static/images/spinner.gif'
        />)

        // if projects have been loaded from server
        if (this.props.has_loaded) {
            // default as if there are no projects
            content = (<span style={styles.no_project_message}>
                There are no projects!
            </span>)

            // if there are any projects
            if (this.props.projects.length !== 0) {
                // filter out which projects to display
                let filtered_projects = this.getFilteredProjects()

                // default as if no projects survived filter
                content = (<span style={styles.no_search_result_message}>
                    No search results!
                </span>)

                // if any projects survived filter
                if (filtered_projects.length !== 0) {
                    content = (<ProjectList projects={filtered_projects} />)
                }
            }
        }

        return (<div style={styles.container}>
            <input
                type='text'
                placeholder='search'
                style={styles.search_bar}
                value={this.state.search_text}
                onChange={(event) =>
                    this.setState({search_text: event.target.value})
                }
            />
            {content}
        </div>)
    }
}


// export component
export default ProjectSearchView


// end of file
