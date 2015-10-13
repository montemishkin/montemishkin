// third party imports
import React from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
// local imports
import styles from './styles'
import IndexLink from 'components/IndexLink'


/**
 * Branding banner.
 */
@connect(({browser}) => ({browser}))
@radium
export default class Banner extends React.Component {
    render() {
        // default to infinity styling
        let headerStyle = styles.headerInfinity
        let subheaderStyle = styles.subheaderInfinity
        // if viewport is less than medium size
        if (this.props.browser.lessThan.medium) {
            // then use medium styling
            headerStyle = styles.headerMedium
            subheaderStyle = styles.subheaderMedium
        }

        return (<div style={styles.container}>
            <h1 style={headerStyle}>
                <IndexLink
                    to='/'
                    style={styles.link}
                >
                    MM
                </IndexLink>
            </h1>
            <h2 style={subheaderStyle}>
                Your friend on the web
            </h2>
        </div>)
    }
}


// end of file
