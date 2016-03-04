// third party imports
import React from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
// local imports
import styles from './styles'
import Link from 'components/Link'
import IndexLink from 'components/IndexLink'


function Footer({browser}) {
    const isLessThanInfinity = browser.lessThan.infinity

    // default to styling for large viewports
    let navLinksStyle = styles.navLinksInfinity
    let copyrightStyle = styles.copyrightInfinity
    let containerStyle = styles.containerInfinity
    // if viewport smaller than infinity size
    if (isLessThanInfinity) {
        // use styling for medium and smaller viewports
        navLinksStyle = styles.navLinksMedium
        copyrightStyle = styles.copyrightMedium
        containerStyle = styles.containerMedium
    }

    // list of navigation links
    const navLinks = (
        <div style={navLinksStyle} key='a'>
            <Link to='/about' style={styles.navLink}>
                About
            </Link>
            <Link to='/posts' style={styles.navLink}>
                Blog
            </Link>
        </div>
    )
    // link to home page
    const homeLink = (
        <IndexLink to='/' style={styles.navLink} key='b'>
            <i className='fa fa-home' />
        </IndexLink>
    )
    // copyright info
    const copyright = (
        <div style={copyrightStyle} key='c'>
            <i className='fa fa-copyright' />
            {' ' + (new Date()).getFullYear() + ' '}
            <a
                href='mailto:monte@mishkin.com'
                style={styles.emailLink}
            >
                Monte Mishkin
            </a>
        </div>
    )

    return (
        <footer style={containerStyle}>
            {
                // if viewport less than infinity width
                isLessThanInfinity
                    // stack with home on top
                    ? [homeLink, navLinks, copyright]
                    // otherwise spread content with home in middle
                    : [navLinks, homeLink, copyright]
            }
        </footer>
    )
}


function mapStateToProps(state) {
    return {
        browser: state.browser,
    }
}


export default connect(mapStateToProps)(radium(Footer))
