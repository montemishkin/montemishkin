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
        return (<Paper title='About'>
            <BusinessCard />
            <p style={styles.bio}>
                Previously, Monte was born.  But recently, Monte made a website.
                Actually, this is that website.  Monte enjoys making websites.
                Monte also enjoys making music.  And trees and mountains.
            </p>
        </Paper>)
    }
}


// export component
export default AboutView


// end of file
