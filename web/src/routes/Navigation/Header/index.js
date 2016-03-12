// third party imports
import React from 'react'
import {css} from 'aphrodite'
// local imports
import styles from './styles'
import Link from 'components/Link'
import IndexLink from 'components/IndexLink'
import List from 'components/List'


function Header() {
    return (
        <nav className={css(styles.outerContainer)}>
            <List className={css(styles.innerContainer)}>
                <IndexLink
                    to='/'
                    className={css(styles.link)}
                    activeClassName={css(styles.linkActive)}
                >
                    HOME
                </IndexLink>
                <Link
                    to='/about'
                    className={css(styles.link)}
                    activeClassName={css(styles.linkActive)}
                >
                    ABOUT
                </Link>
                <Link
                    to='/posts'
                    className={css(styles.link)}
                    activeClassName={css(styles.linkActive)}
                >
                    BLOG
                </Link>
            </List>
        </nav>
    )
}


export default Header
