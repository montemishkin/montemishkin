// third party imports
import React, {Component} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'


class BioSection extends Component {
    render() {
        const {
            Title,
            Text,
            Icon,
            textIsFirst,
            style,
            ...unusedProps,
        } = this.props

        const renderedText = <Text style={styles.text} />
        const renderedIcon = <Icon style={styles.icon} />

        return (
            <section {...unusedProps} style={[styles.container, style]}>
                <Title style={styles.title} />
                <div style={styles.content}>
                    {textIsFirst ? renderedText : renderedIcon}
                    {textIsFirst ? renderedIcon : renderedText}
                </div>
            </section>
        )
    }
}


export default radium(BioSection)
