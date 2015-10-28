// third party imports
import React, {Component} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Footer from './Footer'


/**
 * Root level component.
 */
@radium
export default class Root extends Component {
    render() {
        return (
            <div style={styles.container}>
                {this.props.children}
                <Footer />
            </div>
        )
    }
}
