// third party imports
import React, {Component} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Banner from 'components/Banner'


/**
 * Sitewide 404 page
 */
@radium
export default class NotFound extends Component {
    render() {
        return (
            <article style={styles.container}>
                <Banner
                    style={styles.banner}
                    imageSrc='/static/images/bird-logo.png'
                    title='Not Found'
                    subtitle="hmm... there's nothing here!"
                />
                <div style={styles.content} />
            </article>
        )
    }
}
