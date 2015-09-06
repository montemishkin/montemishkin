/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* local imports */
import styles from './styles'
import Paper from '../Paper'
import BusinessCard from '../BusinessCard'


/**
 * About page view.
 * @class
 */
@radium
class AboutView extends React.Component {
    render() {
        return (<Paper title={'About'}>
            <BusinessCard />
            <p style={styles.bio}>
                info about me
            </p>
        </Paper>)
    }
}


// export component
export default AboutView


// end of file
