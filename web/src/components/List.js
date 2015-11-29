// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'


/**
 * Minimal wrapper over native <ul> and <li> tags.
 */
@radium
export default class List extends Component {
    static propTypes = {
        listItemStyle: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.arrayOf(PropTypes.oneOfType([
                PropTypes.bool,
                PropTypes.object,
            ])),
        ]),
    }


    render() {
        const {listItemStyle, children, ...unusedProps} = this.props

        return (
            <ul {...unusedProps}>
                {React.Children.map(children, (child, key) => (
                    <li style={listItemStyle} key={key}>
                        {child}
                    </li>
                ))}
            </ul>
        )
    }
}
