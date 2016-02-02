// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import List from 'components/List'


/**
 * Just an unordered list along with some styling.
 */
class WideList extends Component {
    static propTypes = {
        style: PropTypes.object,
        listItemStyle: PropTypes.object,
    }


    render() {
        const {
            style,
            listItemStyle,
            children,
            ...unusedProps,
        } = this.props

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
}


export default radium(WideList)
