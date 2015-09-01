/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* local imports */
import styles from './styles'


/**
 * Projects page view.
 * @class
 */
@radium
class Projects extends React.Component {
    render() {
        return (<div style={styles.container}>
            <ul>
                <li>list of recent projects</li>
                <li>filter by date, tag, content, title, ... capabilities</li>
            </ul>
        </div>)
    }
}


// export component
export default Projects


// end of file
