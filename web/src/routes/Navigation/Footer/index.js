// third party imports
import React from 'react'
import {css} from 'aphrodite'
// local imports
import styles from './styles'
import Link from 'components/Link'
import IndexLink from 'components/IndexLink'


function Footer() {
    return (
        <footer className={css(styles.outerContainer)}>
            <div className={css(styles.innerContainer)}>
                <div className={css(styles.navLinks)}>
                    <IndexLink to='/' className={css(styles.navLink)}>
                        HOME
                    </IndexLink>
                    <Link to='/about' className={css(styles.navLink)}>
                        ABOUT
                    </Link>
                    <Link to='/posts' className={css(styles.navLink)}>
                        BLOG
                    </Link>
                </div>
                <div className={css(styles.copyright)}>
                    &copy;
                    {' ' + (new Date()).getFullYear() + ' '}
                    <a
                        href='mailto:monte@mishkin.com'
                        className={css(styles.emailLink)}
                    >
                        MM
                    </a>
                </div>
            </div>
        </footer>
    )
}


export default Footer
