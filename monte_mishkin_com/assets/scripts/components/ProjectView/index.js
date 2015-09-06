/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* local imports */
import styles from './styles'


/**
 * Single project view.
 * @class
 */
@radium
class ProjectView extends React.Component {
    render() {
        return (<div style={styles.container}>
        </div>)
    }
}


// export component
export default ProjectView


// end of file
