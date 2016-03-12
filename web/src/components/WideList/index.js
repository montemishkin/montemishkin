// third party imports
import React from 'react'
import {css} from 'aphrodite'
// local imports
import styles from './styles'
import List from 'components/List'


/**
 * Just an unordered list along with some styling.
 */
function WideList({
    listItemStyle,
    listItemClassName,
    className,
    children,
    ...unusedProps,
}) {
    return (
        <List
            {...unusedProps}
            className={`${css(styles.list)} ${className}`}
            listItemStyle={listItemStyle}
            listItemClassName={`${css(styles.listItem)} ${listItemClassName}`}
            firstListItemClassName={css(styles.listItemFirst)}
        >
            {children}
        </List>
    )
}


export default WideList
