// third party imports
import React from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
// local imports
import styles from './styles'
import Link from 'components/Link'
import IndexLink from 'components/IndexLink'


function Footer({isLessThanLarge}) {
    const innerContainerStyle = isLessThanLarge
        ? styles.innerContainerMedium
        : styles.innerContainerInfinity

    return (
        <footer style={styles.outerContainer}>
            <div style={innerContainerStyle}>
                <div style={styles.navLinks}>
                    <IndexLink to='/' style={styles.navLink}>
                        HOME
                    </IndexLink>
                    <Link to='/about' style={styles.navLink}>
                        ABOUT
                    </Link>
                    <Link to='/posts' style={styles.navLink}>
                        BLOG
                    </Link>
                </div>
                <div style={styles.copyright}>
                    &copy;
                    {' ' + (new Date()).getFullYear() + ' '}
                    <a
                        href='mailto:monte@mishkin.com'
                        style={styles.emailLink}
                    >
                        MM
                    </a>
                </div>
            </div>
        </footer>
    )
}


function mapStateToProps(state) {
    return {isLessThanLarge: state.browser.lessThan.large}
}


export default connect(mapStateToProps)(radium(Footer))
