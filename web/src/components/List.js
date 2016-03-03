// third party imports
import React from 'react'
import radium from 'radium'


/**
 * Minimal wrapper over native <ul> and <li> tags.
 */
function List({
    listItemStyle,
    firstListItemStyle,
    lastListItemStyle,
    children,
    ...unusedProps,
}) {
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


export default radium(List)
