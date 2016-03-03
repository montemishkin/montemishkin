// third party imports
import React from 'react'
import radium from 'radium'


/**
 * This does NOT render markdown.  It merely ensures that the contained
 * markdown will get proper styling from external CSS (by being a child
 * of a .markdown wrapper).
 */
function MarkdownContainer({className, children, ...unusedProps}) {
    return (
        <section
            {...unusedProps}
            className={`markdown ${className}`}
            dangerouslySetInnerHTML={{__html: children}}
        />
    )
}


export default radium(MarkdownContainer)
