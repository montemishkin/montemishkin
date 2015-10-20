// third party imports
import React from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
// local imports
import styles from './styles'
import Link from 'components/Link'
import IndexLink from 'components/IndexLink'
import List from 'components/List'


/**
 * Sitewide footer.
 */
@connect(({browser}) => ({browser}))
@radium
export default class Footer extends React.Component {
    render() {
        // default to infinity styling
        let containerStyle = styles.containerInfinity
        let copyrightStyle = styles.copyrightInfinity
        // if viewport is less than medium
        if (this.props.browser.lessThan.medium) {
            // then use medium styling
            containerStyle = styles.containerMedium
            copyrightStyle = styles.copyrightMedium
        }

        return (
            <div style={containerStyle}>
                <List style={styles.list}>
                    <IndexLink to='/' style={styles.navLink}>
                        Home
                    </IndexLink>
                    <Link to='/about' style={styles.navLink}>
                        About
                    </Link>
                    <Link to='/projects' style={styles.navLink}>
                        Projects
                    </Link>
                    <Link to='/posts' style={styles.navLink}>
                        Blog
                    </Link>
                </List>
                <div style={copyrightStyle}>
                    &copy; {(new Date()).getFullYear() + ' '}
                    <a
                        href='mailto:monte@mishkin.com'
                        style={styles.emailLink}
                    >
                        Monte Mishkin
                    </a>
                </div>
            </div>
        )
    }
}


// end of file
