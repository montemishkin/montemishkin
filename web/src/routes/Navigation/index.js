// third party imports
import React from 'react'
import radium from 'radium'
import Helmet from 'react-helmet'
// local imports
import styles from './styles'
import Header from './Header'
import Footer from './Footer'


/**
 * Adds header and footer navigation bars to UI.
 */
function Navigation({style, children, ...unusedProps}) {
    return (
        <div
            {...unusedProps}
            style={[
                styles.container,
                style,
            ]}
        >
            <Helmet title=':)' titleTemplate='%s | Monte Mishkin' />
            <Header />
            <main style={styles.content}>
                {children}
            </main>
            <Footer />
        </div>
    )
}


export default radium(Navigation)
