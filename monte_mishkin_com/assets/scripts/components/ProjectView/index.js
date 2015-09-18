/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* common alt imports */
import connectToStores from 'alt/utils/connectToStores'
/* misc third party imports */
// import DisqusThread from 'react-disqus-thread'
/* local imports */
import styles from './styles'
import TagListInline from '../TagListInline'
import FormattedDate from '../FormattedDate'
import ProjectStore from '../../stores/ProjectStore'
import ProjectActions from '../../actions/ProjectActions'


/**
 * Single project view.
 * @class
 */
@connectToStores
@radium
class ProjectView extends React.Component {
    static getStores() {
        return [ProjectStore]
    }


    static getPropsFromStores(props) {
        const store_state = ProjectStore.getState()

        return {
            // only grab the project we are viewing
            project: store_state.projects.filter(
                (project) => project.slug === props.params.slug
            )[0],
            has_loaded: store_state.has_loaded,
            fetching: store_state.fetching,
            fetch_error: store_state.fetch_error,
        }
    }


    // see https://github.com/goatslacker/alt/blob/master/src/utils/connectToStores.js#L74
    static componentDidConnect(props) {
        // if projects have not yet been loaded this session
        if (!props.has_loaded) {
            // fetch projects from server
            ProjectActions.fetchProjects()
        }
    }


    /**
     * Returns what `render` should return if we are still mid ajax load.
     */
    getLoadingContent() {
        return (<div style={styles.container}>
            <div style={styles.loading_image_wrapper}>
                <img
                    style={styles.loading_image}
                    alt='Loading Indicator'
                    src='/static/images/spinner.gif'
                />
            </div>
        </div>)
    }


    /**
     * Returns what `render` should return if there was a failure in ajax fetch.
     */
    getFailureContent() {
        return (<div style={styles.container}>
            <h3 style={styles.title}>
                Woops!
            </h3>
            <p style={styles.error_message}>
                We had trouble reaching the server.
                Feel free to refresh the page, or wait for me to retry.
            </p>
        </div>)
    }


    /**
     * Returns what `render` should return if we have loaded and the desired
     * project was found.
     */
    getProjectFoundContent() {
        return (<div style={styles.container}>
            <h3 style={styles.title}>
                {this.props.project.title}
            </h3>
            <div style={styles.project_container}>
                <div style={styles.date_and_tag_list_wrapper}>
                    <div style={styles.creation_date}>
                        <FormattedDate date={this.props.project.creation_date} />
                    </div>
                    <div style={styles.tag_list_wrapper}>
                        <TagListInline tags={this.props.project.tags} />
                    </div>
                </div>
                <div style={styles.project_image_wrapper}>
                    <img
                        style={styles.project_image}
                        alt={`"${this.props.project.title}" Project Thumbnail`}
                        src={this.props.project.image}
                    />
                </div>
                <div
                    style={styles.project_content}
                    dangerouslySetInnerHTML={{
                        __html: this.props.project.content,
                    }}
                />
            </div>
        </div>)
    }


    /**
     * Returns what `render` should return if we have loaded and the desired
     * project was NOT found.
     */
    getProjectNotFoundContent() {
        return (<div style={styles.container}>
            <h3 style={styles.title}>
                Hmm...
            </h3>
            <p style={styles.error_message}>
                There is no project here!
            </p>
        </div>)
    }


    render() {
        // default as if projects have not yet been loaded from server
        let content = this.getLoadingContent()

        // if there has been an error in fetching from server
        if (this.props.fetch_error !== null) {
            content = this.getFailureContent()
            // try to fetch again (after waiting a few seconds)
            setTimeout(() => ProjectActions.fetchProjects(), 3000)
        // no error in fetching from server, projects have been loaded
        } else if (this.props.has_loaded) {
            // if we found the right project
            if (typeof this.props.project !== 'undefined') {
                content = this.getProjectFoundContent()
            // projects loaded but this project not found
            } else {
                content = this.getProjectNotFoundContent()
            }
        }

        return content
    }
}


// <DisqusThread
//     shortname='montemishkin'
//     identifier={this.props.project.slug}
//     title={this.props.project.title}
//     url='http://www.example.com/example-thread'
//     categoryId='123456'
// />


// export component
export default ProjectView


// end of file
