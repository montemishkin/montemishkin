// third party imports
import React, {Component} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Banner from 'components/Banner'
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
                <Banner
                    Icon={props => <MainLogo {...props} />}
                    title='Not Found'
                    subtitle="hmm... there's nothing here!"
                />
                <div style={styles.content} />
            </article>
        )
    }
}
