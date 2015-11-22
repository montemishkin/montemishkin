// third party imports
import React, {Component} from 'react'
import radium from 'radium'
import Link from 'components/Link'
import Logo from 'components/Logos/Main'
// local imports
import styles from './styles'


@radium
export default class Home extends Component {
    render() {
        return (
            <section style={styles.container}>
                <h1 style={styles.header}>
                    Monte Mishkin
                </h1>
                <Logo style={styles.logo} />
                <nav style={styles.nav}>
                    <Link style={styles.navLink} to='/about'>
                        About
                    </Link>
                    <Link style={styles.navLink} to='/projects'>
                        Projects
                    </Link>
                    <Link style={styles.navLink} to='/posts'>
                        Blog
                    </Link>
                </nav>
            </section>
        )
    }
}
