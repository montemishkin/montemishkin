// third party imports
import React from 'react'
import {css} from 'aphrodite'
import Helmet from 'react-helmet'
// local imports
import styles from './styles'


/**
 * Sitewide 404 page
 */
function NotFound() {
    return (
        <article className={css(styles.container)}>
            <Helmet title='Not Found' />
            <img
                src='/static/images/sun.svg'
                className={css(styles.sunImage)}
            />
            <img
                src='/static/images/tree.svg'
                className={css(styles.treeImage)}
            />
            <img
                src='/static/images/logo-main.svg'
                className={css(styles.bird)}
            />
            <img
                src='/static/images/grass.svg'
                className={css(styles.grassImage)}
            />
            <div className={css(styles.overlay)}>
                <div className={css(styles.title)}>
                    Not Found
                </div>
                <div className={css(styles.subtitle)}>
                    There{"'"}s nothing here.
                </div>
            </div>
        </article>
    )
}


export default NotFound
