// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
// import ListItemPreview from './ListItemPreview'


/**
 * Minimal wrapper over native <ul> and <li> tags.
 */
@radium
export default class List extends Component {
    static propTypes = {
        style: PropTypes.string,
    }


    render() {
        // pull out the used props
        const {style, list_item_style, children} = this.props

        return (
            <ul style={[styles.list, style]}>
                {React.Children.map(children, (child, key) => (
                    <li
                        style={[styles.item, list_item_style]}
                        key={key}
                    >
                        {child}
                    </li>
                ))}
            </ul>
        )
    }
}


// end of file
