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
class AboutView extends React.Component {
    render() {
        return (<div style={styles.container}>
            <BusinessCard />
            <p style={styles.bio}>
                Previously, Monte was born.  But recently, Monte made a website.
                Actually, this is that website.  Monte enjoys making websites.
                Monte also enjoys making music.  And trees and mountains.
            </p>
        </div>)
    }
}


// export component
export default AboutView


// end of file
