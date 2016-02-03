// third party imports
import React, {PropTypes} from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
// local imports
import styles from './styles'
import Link from 'components/Link'
import IndexLink from 'components/IndexLink'
import List from 'components/List'
import Logo from 'components/Logos/Main'


function Footer(props) {
    const isLessThanInfinity = props.browser.lessThan.infinity

    // default to styling for large viewports
    let listStyle = styles.listInfinity
    let copyrightStyle = styles.copyrightInfinity
    // if viewport is smaller than infinity size
    if (isLessThanInfinity) {
        // use styling for medium and smaller viewports
        listStyle = styles.listMedium
        copyrightStyle = styles.copyrightMedium
    }


    // list of navigation links
    const list = (
        <List style={listStyle}>
            <Link to='/about' style={styles.navLink}>
                About
            </Link>
            <Link to='/posts' style={styles.navLink}>
                Blog
            </Link>
        </List>
    )
    // link to home page, contains logo
    const logoLink = (
        <IndexLink to='/' style={styles.logoLink}>
            <Logo style={styles.logo} {...styles.logoProps} />
        </IndexLink>
    )
    // copyright info
    const copyright = (
        <div style={copyrightStyle}>
            <i className='fa fa-copyright' />
            {' ' + (new Date()).getFullYear() + ' '}
            <a
                href='mailto:monte@mishkin.com'
                style={styles.emailLink}
            >
                Monte Mishkin
            </a>
        </div>
    )

    // if viewport is less than infinity width
    if (isLessThanInfinity) {
        // stack the content with the logo on top
        return (
            <footer
                {...props}
                style={[
                    styles.containerMedium,
                    props.style,
                ]}
            >
                {logoLink}
                {list}
                {copyright}
            </footer>
        )
    }
    // otherwise the viewport is larger than medium width
    // so spread the content out with the logo in the middle
    return (
        <footer
            {...props}
            style={[
                styles.containerInfinity,
                props.style,
            ]}
        >
            {list}
            {logoLink}
            {copyright}
        </footer>
    )
}


Footer.propTypes = {
    browser: PropTypes.shape({
        lessThan: PropTypes.shape({
            medium: PropTypes.bool.isRequired,
        }).isRequired,
    }).isRequired,
}


function mapStateToProps(state) {
    return {
        browser: state.browser,
    }
}


export default connect(mapStateToProps)(radium(Footer))
