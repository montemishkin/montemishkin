// third party imports
import React from 'react'
import radium from 'radium'
// local imports
import markdown from 'util/markdown'


/**
 * DO NOT render untrusted input!!!!
 */
function Markdown({className, content, ...unusedProps}) {
    return (
        <div
            {...unusedProps}
            className={`md ${className}`}
            dangerouslySetInnerHTML={{__html: markdown(content)}}
        />
    )
}


export default radium(Markdown)
