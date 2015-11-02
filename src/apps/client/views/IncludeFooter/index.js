// third party imports
import React, {Component} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Footer from './Footer'


/**
 * Just adds the Footer to the UI.
 */
@radium
export default class IncludeFooter extends Component {
    render() {
        return (
            <div style={styles.container}>
                {this.props.children}
                <Footer />
            </div>
        )
    }
}
