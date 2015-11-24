// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
// local imports
import styles from './styles'
import Link from 'components/Link'
import IndexLink from 'components/IndexLink'
import List from 'components/List'
import Logo from 'components/Logos/Main'


@connect(({browser}) => ({browser}))
@radium
export default class Footer extends Component {
    static propTypes = {
        browser: PropTypes.shape({
            lessThan: PropTypes.shape({
                medium: PropTypes.bool.isRequired,
            }).isRequired,
        }).isRequired,
    }


    render() {
        const isLessThanInfinity = this.props.browser.lessThan.infinity

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
                <Link to='/' style={styles.navLink}>
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
