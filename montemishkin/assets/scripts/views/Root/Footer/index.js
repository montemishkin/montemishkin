/* common react imports */
import React from 'react'
import radium from 'radium'
/* local imports */
import styles from './styles'
import Link from 'components/Link'
import IndexLink from 'components/IndexLink'
import List from 'components/List'
import {responsive} from 'util'


/**
 * Sitewide footer.
 * @class
 */
@responsive
@radium
class Footer extends React.Component {
    render() {
        // default to infinity styling for `container`
        let container_style = styles.container_infinity
        // default to infinity styling for `left`
        let left_style = styles.left_infinity
        // default to infinity styling for `right`
        let right_style = styles.right_infinity
        // if viewport is less than medium
        if (this.props.browser_less_than.medium) {
            // then use medium styling
            container_style = styles.container_medium
            left_style = styles.left_medium
            right_style = styles.right_medium
        }

        return (<div style={container_style}>
            <List style={left_style}>
                <IndexLink
                    to='/'
                    style={styles.nav_link}
                >
                    Home
                </IndexLink>
                <Link
                    to='/about'
                    style={styles.nav_link}
                >
                    About
                </Link>
                <Link
                    to='/projects'
                    style={styles.nav_link}
                >
                    Projects
                </Link>
                <Link
                    to='/blog'
                    style={styles.nav_link}
                >
                    Blog
                </Link>
            </List>
            <div style={right_style}>
                &copy; {(new Date()).getFullYear() + ' '}
                <a
                    href='mailto:montemishkin@gmail.com'
                    style={styles.email_link}
                >
                    Monte Mishkin
                </a>
            </div>
        </div>)
    }
}


// export component
export default Footer


// end of file
