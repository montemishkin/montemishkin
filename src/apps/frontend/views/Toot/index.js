// third party imports
import React, {Component} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Nav from './Nav'


/**
 * Root level component.
 */
@radium
export default class Toot extends Component {
    render() {
        return (<div style={styles.container}>
            <Nav />
            {this.props.children}
        </div>)
    }
}
