// third party imports
import React, {Component} from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
// local imports
import styles from './styles'
import Nav from './Nav'


/**
 * Root level component.
 */
@connect(({browser}) => ({browser}))
@radium
export default class Toot extends Component {
    render() {
        let contentStyle = styles.contentInfinity
        if (this.props.browser.lessThan.medium) {
            contentStyle = styles.contentMedium
        }

        return (<div style={styles.container}>
            <Nav />
            <div style={styles.contentContainer}>
                <div style={contentStyle}>
                    {this.props.children}
                </div>
            </div>
        </div>)
    }
}
