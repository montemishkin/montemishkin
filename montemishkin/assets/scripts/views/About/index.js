/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* local imports */
import styles from './styles'
import BusinessCard from './BusinessCard'
import {responsive} from 'util'


/**
 * About page view.
 * @class
 */
@responsive
@radium
class About extends React.Component {
    render() {
        // default to infinity styling
        let blockquote_style = styles.blockquote_infinity
        // if viewport is less than medium
        if (this.props.browser_less_than.medium) {
            // then use medium styling
            blockquote_style = styles.blockquote_medium
        }

        return (<div style={styles.container}>
            <BusinessCard />
            <blockquote style={blockquote_style}>
                "Previously, Monte was born.
                But recently, Monte made a website.
                Actually, this is that website.
                Monte enjoys making websites.
                Monte also enjoys making music.
                And trees and mountains."
            </blockquote>
            <p>
            My name is Monte Mishkin and I am the guy with the website!
            To find out more about me, click on this toaster.
            To find out less about me, turn off your device, walk away,
            and forget this ever happened.
            I also have some projects you can take a look at.
            Oh, and a resume.
            And what website would be complete without a blog?
            Anyways, feel free to snoop around.
            </p>
        </div>)
    }
}


// export component
export default About


// end of file
