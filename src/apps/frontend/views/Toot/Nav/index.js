// third party imports
import React, {Component} from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
// local imports
import styles from './styles'
import Link from 'components/Link'
import IndexLink from 'components/IndexLink'
import List from 'components/List'


/**
 * Navigation bar.
 */
@connect(({browser}) => ({browser}))
@radium
export default class Nav extends Component {
    render() {
        // default to infinity styling for inner container
        let containerStyle = styles.containerInfinity
        // if viewport is less than medium
        if (this.props.browser.lessThan.medium) {
            // then use medium styling
            containerStyle = styles.containerMedium
        }

        return (
            <nav>
                <List style={containerStyle}>
                    <IndexLink to='/' style={styles.link}>
                        home
                    </IndexLink>
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
