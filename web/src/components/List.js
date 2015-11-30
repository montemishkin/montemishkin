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
        const {
            listItemStyle,
            firstListItemStyle,
            lastListItemStyle,
            children,
            ...unusedProps,
        } = this.props

        const count = React.Children.count(children)

        return (
            <ul {...unusedProps}>
                {React.Children.map(children, (child, key) => {
                    let liStyle = listItemStyle
                    // if this is first list item
                    if (key === 0) {
                        liStyle = [
                            listItemStyle,
                            firstListItemStyle,
                        ]
                    // if this is last list item
                    } else if (key === count - 1) {
                        liStyle = [
                            listItemStyle,
                            lastListItemStyle,
                        ]

                    }

                    return (
                        <li style={liStyle} key={key}>
                            {child}
                        </li>
                    )
                })}
            </ul>
        )
    }
}
