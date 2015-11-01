// third party imports
import React from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
// local imports
import styles from './styles'
import Link from 'components/Link'
import IndexLink from 'components/IndexLink'
import List from 'components/List'
import Logo from 'components/Logo'


/**
 * Sitewide footer.
 */
@connect(({browser}) => ({browser}))
@radium
export default class Footer extends React.Component {
    render() {
        const isLessThanMedium = this.props.browser.lessThan.medium

        // default to styling for large viewports
        let listStyle = styles.listInfinity
        let copyrightStyle = styles.copyrightInfinity
        // if viewport is smaller than medium size
        if (isLessThanMedium) {
            // use styling for medium and smaller viewports
            listStyle = styles.listMedium
            copyrightStyle = styles.copyrightMedium
        }


        // list of navigation links
        const list = (
            <List style={listStyle}>
                <Link to='/about' style={styles.navLink}>
                    about
                </Link>
                <Link to='/projects' style={styles.navLink}>
                    projects
                </Link>
                <Link to='/posts' style={styles.navLink}>
                    blog
                </Link>
            </List>
        )
        // link to home page, contains logo
        const logoLink = (
            <IndexLink to='/' style={styles.logoLink}>
                <Logo style={styles.logo} />
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
                    monte mishkin
                </a>
            </div>
        )

        // if viewport is less than medium width
        if (isLessThanMedium) {
            // stack the content with the logo on top
            return (
                <footer style={styles.containerMedium}>
                    {logoLink}
                    {list}
                    {copyright}
                </footer>
            )
        }
        // otherwise the viewport is larger than medium width
        // so spread the content out with the logo in the middle
        return (
            <footer style={styles.containerInfinity}>
                {list}
                {logoLink}
                {copyright}
            </footer>
        )
    }
}
