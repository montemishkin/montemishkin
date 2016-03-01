// third party imports
import React from 'react'
import radium from 'radium'
// local imports
import styles from './styles'


function BioSection({Title, Text, Icon, textIsFirst}) {
    const renderedText = <Text style={styles.text} key='a' />
    const renderedIcon = <Icon style={styles.icon} key='b' />

    return (
        <section style={styles.container}>
            <Title style={styles.title} />
            <div style={styles.content}>
                {
                    textIsFirst
                        ? [renderedText, renderedIcon]
                        : [renderedIcon, renderedText]
                }
            </div>
        </section>
    )
}


export default radium(BioSection)
