// third party imports
import React from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
// local imports
import styles from './styles'
import Link from 'components/Link'
import IndexLink from 'components/IndexLink'
import List from 'components/List'


function Header({isLessThanLarge}) {
    const innerContainerStyle = isLessThanLarge
        ? styles.innerContainerMedium
        : styles.innerContainerInfinity

    return (
        <nav style={styles.outerContainer}>
            <List style={innerContainerStyle}>
                <IndexLink to='/' style={styles.link}>
                    HOME
                </IndexLink>
                <Link to='/about' style={styles.link}>
                    ABOUT
                </Link>
                <Link to='/posts' style={styles.link}>
                    BLOG
                </Link>
            </List>
        </nav>
    )
}


function mapStateToProps(state) {
    return {isLessThanLarge: state.browser.lessThan.large}
}


export default connect(mapStateToProps)(radium(Header))
