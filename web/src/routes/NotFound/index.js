// third party imports
import React from 'react'
import {css} from 'aphrodite'
import Helmet from 'react-helmet'
// local imports
import styles from './styles'
import MainLogo from 'components/logos/Main'
import SunIcon from 'components/icons/Sun'
import TreeIcon from 'components/icons/Tree'
import GrassIcon from 'components/icons/Grass'


/**
 * Sitewide 404 page
 */
function NotFound() {
    return (
        <article className={css(styles.container)}>
            <Helmet title='Not Found' />
            <SunIcon className={css(styles.sunImage)} />
            <TreeIcon className={css(styles.treeImage)} />
            <MainLogo className={css(styles.bird)} />
            <GrassIcon className={css(styles.grassImage)} />
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
