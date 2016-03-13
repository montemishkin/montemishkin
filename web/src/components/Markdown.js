// third party imports
import React from 'react'
import radium from 'radium'
// local imports
import markdown from 'util/markdown'


// apply styling needed for markdown content
import 'styles/css/markdown.css'


/**
 * DO NOT render untrusted input!!!!
 */
function Markdown({className, content, ...unusedProps}) {
    return (
        <section
            {...unusedProps}
            className={`markdown ${className}`}
            dangerouslySetInnerHTML={{__html: markdown(content)}}
        />
    )
}


export default radium(Markdown)
