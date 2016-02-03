// third party imports
import React from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Link from 'components/Link'
import IndexLink from 'components/IndexLink'
import List from 'components/List'
import Logo from 'components/Logos/Main'


function Header({style, ...unusedProps}) {
    return (
        <nav
            {...unusedProps}
            style={[
                styles.container,
                style,
            ]}
        >
            <IndexLink to='/' style={styles.logoLink}>
                <Logo style={styles.logo} {...styles.logoProps} />
            </IndexLink>
            <List style={styles.list}>
                <Link to='/about' style={styles.link}>
                    About
                </Link>
                <Link to='/posts' style={styles.link}>
                    Blog
                </Link>
            </List>
        </nav>
    )
}


export default radium(Header)
