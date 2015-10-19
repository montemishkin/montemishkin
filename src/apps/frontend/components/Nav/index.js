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
        let innerContainerStyle = styles.innerContainerInfinity
        // if viewport is less than medium
        if (this.props.browser.lessThan.medium) {
            // then use medium styling
            innerContainerStyle = styles.innerContainerMedium
        }

        return (<nav style={styles.outerContainer}>
            <List style={innerContainerStyle} listItemStyle={styles.listItem}>
                <IndexLink
                    to='/'
                    style={styles.link}
                    activeStyle={styles.linkActive}
                >
                    home
                </IndexLink>
                <Link
                    style={styles.link}
                    activeStyle={styles.linkActive}
                    to='/about'
                >
                    about
                </Link>
                <Link
                    style={styles.link}
                    activeStyle={styles.linkActive}
                    to='/projects'
                >
                    projects
                </Link>
                <Link
                    style={styles.link}
                    activeStyle={styles.linkActive}
                    to='/posts'
                >
                    blog
                </Link>
            </List>
        </nav>)
    }
}


// end of file
