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
 * Navigation bar.
 * @class
 */
@responsive
@radium
class Nav extends React.Component {
    render() {
        // default to infinity styling for inner container
        let inner_container_style = styles.inner_container_infinity
        // if viewport is less than medium
        if (this.props.browser_less_than.medium) {
            // then use medium styling
            inner_container_style = styles.inner_container_medium
        }

        return (<div style={styles.outer_container}>
            <List style={inner_container_style}>
                <IndexLink
                    to='/'
                    style={styles.link}
                    activeStyle={styles.link_active}
                >
                    home
                </IndexLink>
                <Link
                    style={styles.link}
                    activeStyle={styles.link_active}
                    to='/about'
                >
                    about
                </Link>
                <Link
                    style={styles.link}
                    activeStyle={styles.link_active}
                    to='/projects'
                >
                    projects
                </Link>
                <Link
                    style={styles.link}
                    activeStyle={styles.link_active}
                    to='/blog'
                >
                    blog
                </Link>
            </List>
        </div>)
    }
}


// export component
export default Nav


// end of file
