// third party imports
import React, {Component} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Nav from './Nav'


/**
 * Just adds the Nav bar to the UI.
 */
@radium
export default class IncludeNav extends Component {
    render() {
        return (
            <div style={styles.container}>
                <Nav />
                {this.props.children}
            </div>
        )
    }
}
