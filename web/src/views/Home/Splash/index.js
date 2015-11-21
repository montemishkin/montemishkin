// third party imports
import React, {Component} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Link from 'components/Link'
import Logo from 'components/Logo'


@radium
export default class Splash extends Component {
    render() {
        const {onClickScrollButton} = this.props

        return (
            <section style={styles.container}>
                <div style={styles.content}>
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
                </div>
                <div style={styles.scrollButtonContainer}>
                    <button
                        type='button'
                        style={styles.scrollButton}
                        onClick={onClickScrollButton}
                    >
                        <i className='fa fa-chevron-down' />
                    </button>
                </div>
            </section>
        )
    }
}
