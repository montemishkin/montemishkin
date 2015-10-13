// third party imports
import React from 'react'
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
export default class Nav extends React.Component {
    render() {
        // default to infinity styling for inner container
        let innerContainerStyle = styles.innerContainerInfinity
        // if viewport is less than medium
        if (this.props.browser.lessThan.medium) {
            // then use medium styling
            innerContainerStyle = styles.innerContainerMedium
        }

        return (<div style={styles.outerContainer}>
            <List style={innerContainerStyle}>
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
                    to='/blog'
                >
                    blog
                </Link>
            </List>
        </div>)
    }
}


// end of file
