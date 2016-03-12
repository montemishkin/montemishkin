// third party imports
import React from 'react'
import {css} from 'aphrodite'
import radium from 'radium'
// local imports
import styles from './styles'
import Content from './Content'
import stalker from 'decorators/stalker'


function TableOfContents({content, className, ...unusedProps}) {
    return (
        <nav
            {...unusedProps}
            className={`${css(styles.container)} ${className}`}
        >
            <h3 className={css(styles.title)}>
                Table of Contents
            </h3>
            <Content content={content} />
        </nav>
    )
}


export default stalker(radium(TableOfContents))
