// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'


/**
 * Minimal wrapper over native <ul> and <li> tags.
 */
@radium
export default class List extends Component {
    static propTypes = {
        style: PropTypes.object,
        listItemStyle: PropTypes.object,
    }


    render() {
        // pull out the used props
        const {style, listItemStyle, children} = this.props

        return (
            <ul style={style}>
                {React.Children.map(children, (child, key) => (
                    <li
                        style={listItemStyle}
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
