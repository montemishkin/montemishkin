// third party imports
import React, {Component} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Link from 'components/Link'
import IndexLink from 'components/IndexLink'
import List from 'components/List'
import Logo from 'components/Logo'


@radium
export default class Header extends Component {
    render() {
        return (
            <nav style={styles.container}>
                <IndexLink to='/' style={styles.logoLink}>
                    <Logo style={styles.logo} />
                </IndexLink>
                <List style={styles.list}>
                    <Link to='/about' style={styles.link}>
                        about
                    </Link>
                    <Link to='/projects' style={styles.link}>
                        projects
                    </Link>
                    <Link to='/posts' style={styles.link}>
                        blog
                    </Link>
                </List>
            </nav>
        )
    }
}
