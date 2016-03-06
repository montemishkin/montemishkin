// third party imports
import React from 'react'
import radium from 'radium'
import Helmet from 'react-helmet'
// local imports
import styles from './styles'


/**
 * Sitewide 404 page
 */
function NotFound() {
    return (
        <article style={styles.container}>
            <Helmet title='Not Found' />
            <img
                src='/static/images/sun.svg'
                style={styles.sunImage}
            />
            <img
                src='/static/images/tree.svg'
                style={styles.treeImage}
            />
            <img
                src='/static/images/logo-main.svg'
                style={styles.bird}
            />
            <img
                src='/static/images/grass.svg'
                style={styles.grassImage}
            />
            <div style={styles.overlay}>
                <div style={styles.title}>
                    Not Found
                </div>
                <div style={styles.subtitle}>
                    There{"'"}s nothing here.
                </div>
            </div>
        </article>
    )
}


export default radium(NotFound)
