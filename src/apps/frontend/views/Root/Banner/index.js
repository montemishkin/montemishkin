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
        let header_style = styles.header_infinity
        let subheader_style = styles.subheader_infinity
        // if viewport is less than medium size
        if (this.props.browser.lessThan.medium) {
            // then use medium styling
            header_style = styles.header_medium
            subheader_style = styles.subheader_medium
        }

        return (<div style={styles.container}>
            <h1 style={header_style}>
                <IndexLink
                    to='/'
                    style={styles.link}
                >
                    MM
                </IndexLink>
            </h1>
            <h2 style={subheader_style}>
                Your friend on the web
            </h2>
        </div>)
    }
}


// end of file
