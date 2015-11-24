// third party imports
import React, {Component} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Link from 'components/Link'
import IndexLink from 'components/IndexLink'
import List from 'components/List'
import Logo from 'components/Logos/Main'


@radium
export default class Header extends Component {
    render() {
        return (
            <nav style={styles.container}>
                <IndexLink to='/' style={styles.logoLink}>
                    <Logo
                        style={styles.logo}
                        hatTopFill='grey'
                        hatRimFill='grey'
                        bodyFill='white'
                        wingFill='white'
                        noseFill='white'
                        eyeFill='grey'
                        bodyStroke='grey'
                        eyeStroke='grey'
                        noseStroke='grey'
                        wingStroke='grey'
                        leftLegStroke='grey'
                        leftFootStroke='grey'
                        rightLegStroke='grey'
                        rightFootStroke='grey'
                        hatRimStroke='grey'
                        hatTopStroke='grey'
                    />
                </IndexLink>
                <List style={styles.list}>
                    <Link to='/' style={styles.link}>
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
