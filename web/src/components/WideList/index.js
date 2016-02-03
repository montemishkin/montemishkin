// third party imports
import React, {PropTypes} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import List from 'components/List'


/**
 * Just an unordered list along with some styling.
 */
function WideList({
    style,
    listItemStyle,
    children,
    ...unusedProps,
}) {
    return (
        <List
            {...unusedProps}
            style={[
                styles.list,
                style,
            ]}
            listItemStyle={{
                ...styles.listItem,
                ...listItemStyle,
            }}
            firstListItemStyle={styles.listItemFirst}
        >
            {children}
        </List>
    )
}


WideList.propTypes = {
    style: PropTypes.object,
    listItemStyle: PropTypes.object,
}


export default radium(WideList)
