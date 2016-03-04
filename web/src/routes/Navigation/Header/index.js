// third party imports
import React from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Link from 'components/Link'
import IndexLink from 'components/IndexLink'


function Header() {
    return (
        <nav style={styles.container}>
            <IndexLink to='/' style={styles.link}>
                <i className='fa fa-home' />
            </IndexLink>
            <div style={styles.rightLinks}>
                <Link to='/about' style={styles.link}>
                    About
                </Link>
                <Link to='/posts' style={styles.link}>
                    Blog
                </Link>
            </div>
        </nav>
    )
}


export default radium(Header)
