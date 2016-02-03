// third party imports
import React, {PropTypes} from 'react'
import radium from 'radium'


/**
 * This does NOT render markdown.  It merely ensures that the contained
 * markdown will get proper styling from external CSS (by being a child
 * of a .markdown wrapper).
 */
function MarkdownContainer({
    className,
    children,
    ...unusedProps,
}) {
    return (
        <section
            {...unusedProps}
            className={className}
            dangerouslySetInnerHTML={{__html: children}}
        />
    )
}


MarkdownContainer.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}


MarkdownContainer.defaultProps = {
    className: 'markdown',
}


export default radium(MarkdownContainer)
