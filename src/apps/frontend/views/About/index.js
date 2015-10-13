// third party imports
import React from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
// local imports
import styles from './styles'
import BusinessCard from './BusinessCard'


/**
 * About page view.
 */
@connect(({browser}) => ({browser}))
@radium
export default class About extends React.Component {
    render() {
        // default to infinity styling
        let blockquoteStyle = styles.blockquoteInfinity
        // if viewport is less than medium
        if (this.props.browser.lessThan.medium) {
            // then use medium styling
            blockquoteStyle = styles.blockquoteMedium
        }

        return (<div style={styles.container}>
            <BusinessCard />
            <blockquote style={blockquoteStyle}>
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


// end of file
