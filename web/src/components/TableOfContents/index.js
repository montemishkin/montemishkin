// third party imports
import React from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Content from './Content'
import stalker from 'decorators/stalker'


function TableOfContents({content, style, ...unusedProps}) {
    return (
        <nav
            {...unusedProps}
            style={[styles.container, style]}
        >
            <h3 style={styles.title}>
                Table of Contents
            </h3>
            <Content content={content} />
        </nav>
    )
}


export default stalker(radium(TableOfContents))
