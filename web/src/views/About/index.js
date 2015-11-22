// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
// local imports
import styles from './styles'
import Banner from 'components/Banner'
import BaseLogo from 'components/Logos/Base'
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
                    Icon={props => <BaseLogo {...props} />}
                >
                    <ContactInfoBar />
                </Banner>
                <article style={styles.contentContainer}>
                    <div style={styles.content}>
                        <p>
                            Hello.
                            I'm a general purpose friendly person and overal enjoyer of things.
                            I'm also a web developer!
                            You should probably hire me.
                        </p>
                        <blockquote style={blockquoteStyle}>
                            "Previously, Monte was born.
                            But recently, Monte made a website.
                            Actually, this is that website.
                            Monte enjoys making websites.
                            Monte also enjoys making music.
                            And trees and mountains."
                        </blockquote>

                        <section style={styles.hello}>
                            <h3>Hello.</h3>
                        </section>
                        <section style={styles.about}>
                            <h3>Skills</h3>
                            <ul>
                                <li>Self taught programmer focusing on web development, with a passion for making things "the way they should be"</li>
                                <li>Analytical thinker with excellent problem solving skills</li>
                                <li>Vocational mathematician and physicist</li>
                                <li>Half hearted musician</li>
                            </ul>
                        </section>
                        <section style={styles.projects}>
                            <h3>Projects</h3>
                            <p>
                                For the most part, my projects involve some combination of these awesome technologies:
                            </p>
                            <ul>
                                <li>React</li>
                                <li>Redux (Flux)</li>
                                <li>GraphQL</li>
                                <li>Node</li>
                                <li>Django</li>
                            </ul>
                            <p>
                                However, on occasion, you might see me put out an album, or maybe a video game.
                                To that end, here are some other great programs I have experience with:
                            </p>
                            <ul>
                                <li>Ableton</li>
                                <li>Blender</li>
                                <li>Unity</li>
                            </ul>
                            You can keep up with my latest works over [here](thisshouldbealinktoprojectssearchview)!
                        </section>
                        <section style={styles.blog}>
                            <h3>Blog</h3>
                            <p>
                                I have yet to get in the habit of writing blog posts consistently,
                                but over at [my blog](linktoblogsearchview) you can expect to find
                                articles relating to:
                            </p>
                            <ul>
                                <li>My experiences with various technoligies (both web-related and not web-related)</li>
                                <li>Miscellaneous meanderings about math and/or physics</li>
                                <li>Other experiences and exciting things I want the world to know about!</li>
                            </ul>
                        </section>
                        <section style={styles.conclusion}>
                            A little conclusion:
                            My name is Monte Mishkin and I am the guy with the website!
                            To find out more about me, click on this toaster.
                            To find out less about me, turn off your device, walk away,
                            and forget this ever happened.
                            I also have some projects you can take a look at.
                            Oh, and a resume.
                            And what website would be complete without a blog?
                            Anyways, feel free to snoop around.
                        </section>
                    </div>
                </article>
            </div>
        )
    }
}
