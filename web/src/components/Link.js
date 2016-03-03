// third party imports
import React from 'react'
import radium from 'radium'
import {Link as ReactRouterLink} from 'react-router'


const ReactRouterLinkWithRadium = radium(ReactRouterLink)


function Link({style, ...unusedProps}) {
    return (
        <ReactRouterLinkWithRadium
            {...unusedProps}
            style={[
                {textDecoration: 'none'},
                style,
            ]}
        />
    )
}


export default radium(Link)
