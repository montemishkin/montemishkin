/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* local imports */
import styles from './styles'


/**
 * About page view.
 * @class
 */
@radium
class About extends React.Component {
    render() {
        return (<div style={styles.container}>
            <ul>
                <li>picture of me</li>
                <li>info about me</li>
                <li>link to resume pdf</li>
                <li>link to github</li>
                <li>link to soundcloud</li>
                <li>link to contact me</li>
            </ul>
        </div>)
    }
}


// export component
export default About


// end of file
