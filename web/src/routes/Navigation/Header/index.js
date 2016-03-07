// third party imports
import React from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Link from 'components/Link'
import IndexLink from 'components/IndexLink'
import List from 'components/List'

// TODO: looks a bit weird on small devices to have this justified right

function Header() {
    return (
        <nav style={styles.outerContainer}>
            <List style={styles.innerContainer}>
                <IndexLink to='/' style={styles.link}>
                    HOME
                </IndexLink>
                <Link to='/about' style={styles.link}>
                    ABOUT
                </Link>
                <Link to='/posts' style={styles.link}>
                    BLOG
                </Link>
            </List>
        </nav>
    )
}


export default radium(Header)
