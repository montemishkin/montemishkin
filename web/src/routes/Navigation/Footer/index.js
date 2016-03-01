// third party imports
import React from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
// local imports
import styles from './styles'
import Link from 'components/Link'
import IndexLink from 'components/IndexLink'
import List from 'components/List'
import Logo from 'components/Logos/Main'


function Footer({browser}) {
    const isLessThanInfinity = browser.lessThan.infinity

    // default to styling for large viewports
    let listStyle = styles.listInfinity
    let copyrightStyle = styles.copyrightInfinity
    let containerStyle = styles.containerInfinity
    // if viewport smaller than infinity size
    if (isLessThanInfinity) {
        // use styling for medium and smaller viewports
        listStyle = styles.listMedium
        copyrightStyle = styles.copyrightMedium
        containerStyle = styles.containerMedium
    }

    // list of navigation links
    const navLinks = (
        <List style={listStyle} key='a'>
            <Link to='/about' style={styles.navLink}>
                About
            </Link>
            <Link to='/posts' style={styles.navLink}>
                Blog
            </Link>
        </List>
    )
    // link to home page, contains logo
    const logoLink = (
        <IndexLink to='/' style={styles.logoLink} key='b'>
            <Logo style={styles.logo} {...styles.logoProps} />
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
                    // stack with logo on top
                    ? [logoLink, navLinks, copyright]
                    // otherwise spread content with logo in middle
                    : [navLinks, logoLink, copyright]
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
