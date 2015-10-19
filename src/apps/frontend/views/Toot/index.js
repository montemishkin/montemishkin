// third party imports
import React from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Nav from 'components/Nav'


/**
 * Root level component.
 */
@radium
export default class Root extends React.Component {
    render() {
        // grab the used props
        const {children} = this.props

        return (<div style={styles.container}>
            <Nav />
            <div style={styles.content}>
                {children}
            </div>
        </div>)
    }
}


// end of file
