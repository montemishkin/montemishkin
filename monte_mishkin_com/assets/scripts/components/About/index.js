/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* local imports */
import styles from './styles'
import BusinessCard from '../BusinessCard'


/**
 * About page view.
 * @class
 */
@radium
class About extends React.Component {
    render() {
        return (<div style={styles.container}>
            <BusinessCard />
            <p>info about me</p>
        </div>)
    }
}


// export component
export default About


// end of file
