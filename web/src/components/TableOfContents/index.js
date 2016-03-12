// third party imports
import React from 'react'
import {css} from 'aphrodite'
// local imports
import styles from './styles'
import Content from './Content'


function TableOfContents({content}) {
    return (
        <nav className={css(styles.container)}>
            <h3 className={css(styles.title)}>
                Table of Contents
            </h3>
            <Content content={content} />
        </nav>
    )
}


export default TableOfContents
