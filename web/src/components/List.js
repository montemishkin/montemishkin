// third party imports
import React from 'react'
import radium from 'radium'


/**
 * Minimal wrapper over native <ul> and <li> tags.
 */
function List({
    listItemStyle,
    listItemClassName,
    firstListItemStyle,
    firstListItemClassName,
    lastListItemStyle,
    lastListItemClassName,
    children,
    ...unusedProps,
}) {
    const count = React.Children.count(children)

    return (
        <ul {...unusedProps}>
            {React.Children.map(children, (child, key) => {
                let liStyle = listItemStyle
                let liClassName = listItemClassName
                // if this is first list item
                if (key === 0) {
                    liStyle = [
                        listItemStyle,
                        firstListItemStyle,
                    ]
                    liClassName += ` ${firstListItemClassName}`
                // if this is last list item
                } else if (key === count - 1) {
                    liStyle = [
                        listItemStyle,
                        lastListItemStyle,
                    ]
                    liClassName += ` ${lastListItemClassName}`
                }

                return (
                    <li style={liStyle} className={liClassName} key={key}>
                        {child}
                    </li>
                )
            })}
        </ul>
    )
}


export default radium(List)
