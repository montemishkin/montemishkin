// third party imports
import React, {Component} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import MainLogo from 'components/Logos/Main'


/**
 * Sitewide 404 page
 */
@radium
export default class NotFound extends Component {
    render() {
        const {style, ...unusedProps} = this.props

        return (
            <article
                {...unusedProps}
                style={[
                    styles.container,
                    style,
                ]}
            >
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
}
