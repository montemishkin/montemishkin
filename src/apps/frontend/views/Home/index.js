// third party imports
import React, {Component} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Sage from './Sage'
import Link from 'components/Link'


function easeInOut(x) {
    // unique 3rd degree polynomial with
    // p(0) = 0
    // p(1) = 1
    // p'(0) = p'(1) = 0
    return x * x * (3 - (2 * x))
}


/**
 * Home page view.
 */
@radium
export default class Home extends Component {
    scrollFrame({t, start, destination, previous}) {
        const {scrollY, scrollTo} = window

        // if we have not yet reached the destination
        // and the user has not canceled (by scrolling up)
        if (scrollY < destination && previous <= scrollY) {
            scrollTo(0, start + ((destination - start) * easeInOut(t)))
            requestAnimationFrame(() => this.scrollFrame({
                start,
                destination,
                previous: scrollY,
                t: t + 0.04,
            }))
        }
    }


    scrollDown() {
        const {scrollY, innerHeight} = window

        requestAnimationFrame(() => this.scrollFrame({
            t: 0,
            start: scrollY,
            destination: innerHeight,
            previous: scrollY,
        }))
    }


    render() {
        return (<div style={styles.container}>
            <section style={styles.banner}>
                <div style={styles.bannerContent}>
                    <h1 style={styles.header}>
                        Monte Mishkin
                    </h1>
                    <img
                        alt='logo'
                        src='/static/images/bird-logo.png'
                        style={styles.logo}
                    />
                    <nav style={styles.nav}>
                        <Link style={styles.navLink} to='/about'>
                            About
                        </Link>
                        <Link style={styles.navLink} to='/projects'>
                            Projects
                        </Link>
                        <Link style={styles.navLink} to='/posts'>
                            Blog
                        </Link>
                    </nav>
                </div>
                <div style={styles.downArrowContainer}>
                    <img
                        alt='down arrow'
                        src='/static/images/down-arrow-50.png'
                        style={styles.downArrow}
                        onClick={() => this.scrollDown()}
                    />
                </div>
            </section>
            <section style={styles.sage}>
                <Sage />
            </section>
            <section style={styles.about}>
                about me a little bit
            </section>
            <section style={styles.projects}>
                about my projects a little bit
            </section>
            <section style={styles.blog}>
                about my blog a little bit
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
        </div>)
    }
}


// end of file
