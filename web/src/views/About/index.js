// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
// local imports
import styles from './styles'
import Banner from 'components/Banner'
import ContactInfoBar from './ContactInfoBar'


/**
 * About page view.
 */
@connect(({browser}) => ({browser}))
@radium
export default class About extends Component {
    static propTypes = {
        browser: PropTypes.shape({
            lessThan: PropTypes.shape({
                medium: PropTypes.bool.isRequired,
            }).isRequired,
        }).isRequired,
    }


    render() {
        // default to infinity styling
        let blockquoteStyle = styles.blockquoteInfinity
        // if viewport is less than infinity
        if (this.props.browser.lessThan.infinity) {
            // then use medium styling
            blockquoteStyle = styles.blockquoteMedium
        }

        return (
            <div>
                <Banner
                    style={styles.banner}
                    title='Monte Mishkin'
                    subtitle='A friendly person.'
                    imageSrc='/static/images/logo-base.svg'
                >
                    <ContactInfoBar />
                </Banner>
                <article style={styles.contentContainer}>
                    <div style={styles.content}>
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
                    </div>
                </article>
            </div>
        )
    }
}
