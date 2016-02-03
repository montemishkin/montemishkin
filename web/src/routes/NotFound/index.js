// third party imports
import React from 'react'
import radium from 'radium'
import Helmet from 'react-helmet'
// local imports
import styles from './styles'
import MainLogo from 'components/Logos/Main'


/**
 * Sitewide 404 page
 */
function NotFound({style, ...unusedProps}) {
    return (
        <article
            {...unusedProps}
            style={[
                styles.container,
                style,
            ]}
        >
            <Helmet title='Not Found' />
            <img
                src='/static/images/sun.svg'
                style={styles.sunImage}
            />
            <img
                src='/static/images/tree.svg'
                style={styles.treeImage}
            />
            <MainLogo style={styles.bird} />
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
