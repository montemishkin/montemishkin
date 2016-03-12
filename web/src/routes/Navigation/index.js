// third party imports
import React from 'react'
import {css} from 'aphrodite'
import Helmet from 'react-helmet'
// local imports
import styles from './styles'
import Header from './Header'
import Footer from './Footer'


/**
 * Adds header and footer navigation bars to UI.
 */
function Navigation({children}) {
    return (
        <div className={css(styles.container)}>
            <Helmet title=':)' titleTemplate='%s | Monte Mishkin' />
            <Header />
            <main className={css(styles.content)}>
                {children}
            </main>
            <Footer />
        </div>
    )
}


export default Navigation
