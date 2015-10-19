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
        // default to infinity styling for `container`
        let containerStyle = styles.containerInfinity
        // default to infinity styling for `left`
        let leftStyle = styles.leftInfinity
        // default to infinity styling for `right`
        let rightStyle = styles.rightInfinity
        // if viewport is less than medium
        if (this.props.browser.lessThan.medium) {
            // then use medium styling
            containerStyle = styles.containerMedium
            leftStyle = styles.leftMedium
            rightStyle = styles.rightMedium
        }

        return (<div style={containerStyle}>
            <List style={leftStyle}>
                <IndexLink
                    to='/'
                    style={styles.navLink}
                >
                    Home
                </IndexLink>
                <Link
                    to='/about'
                    style={styles.navLink}
                >
                    About
                </Link>
                <Link
                    to='/projects'
                    style={styles.navLink}
                >
                    Projects
                </Link>
                <Link
                    to='/posts'
                    style={styles.navLink}
                >
                    Blog
                </Link>
            </List>
            <div style={rightStyle}>
                &copy; {(new Date()).getFullYear() + ' '}
                <a
                    href='mailto:monte@mishkin.com'
                    style={styles.emailLink}
                >
                    Monte Mishkin
                </a>
            </div>
        </div>)
    }
}


// end of file
