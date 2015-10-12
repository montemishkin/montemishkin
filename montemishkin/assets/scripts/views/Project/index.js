/* common react imports */
import React from 'react'
import radium from 'radium'
/* common alt imports */
import connectToStores from 'alt/utils/connectToStores'
/* misc third party imports */
// import DisqusThread from 'react-disqus-thread'
/* local imports */
import styles from './styles'
import TagListInline from 'components/TagListInline'
import FormattedDate from 'components/FormattedDate'
import Loader from 'components/Loader'
import ProjectStore from 'stores/ProjectStore'
import ProjectActions from 'actions/ProjectActions'


/**
 * Single project view.
 * @class
 */
@connectToStores
@radium
class Project extends React.Component {
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
    LoadingComponent() {
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
    FailureComponent() {
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
     * project was NOT found.
     */
    ProjectNotFoundComponent() {
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
        const {fetching, has_loaded, fetch_error, project} = this.props

        let SuccessComponent
        if (has_loaded && project) {
            const {title, creation_date, tags, content, image} = this.props.project

            SuccessComponent = () => (
                <div style={styles.container}>
                    <div style={styles.project_heading_wrapper}>
                        <img
                            style={styles.project_image}
                            alt={`"${title}" Project Thumbnail`}
                            src={image}
                        />
                        <div style={styles.project_heading_right}>
                            <h3 style={styles.title}>
                                {title}
                            </h3>
                            <div style={styles.date_and_tag_list_wrapper}>
                                <div style={styles.creation_date}>
                                    <FormattedDate date={creation_date} />
                                </div>
                                <div style={styles.tag_list_wrapper}>
                                    <TagListInline tags={tags} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        style={styles.project_content}
                        dangerouslySetInnerHTML={{
                            __html: content,
                        }}
                    />
                </div>
            )
        } else {
            SuccessComponent = this.ProjectNotFoundComponent
        }

        return (
            <Loader
                is_fetching={fetching}
                has_fetched={has_loaded}
                error={fetch_error}
                reattempt_timeout={3000}
                fetch={ProjectActions.fetchProjects}
                error_content={this.FailureComponent}
                fetching_content={this.LoadingComponent}
                success_content={SuccessComponent}
            />
        )
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
export default Project


// end of file
