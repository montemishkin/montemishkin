// third party imports
import React from 'react'
import radium from 'radium'
import {Link as ReactRouterLink} from 'react-router'


const ReactRouterLinkWithRadium = radium(ReactRouterLink)


function Link({style, children, ...unusedProps}) {
    return (
        <ReactRouterLinkWithRadium
            {...unusedProps}
            style={[
                {
                    textDecoration: 'none',
                    cursor: 'pointer',
                },
                style,
            ]}
        >
            {children}
        </ReactRouterLinkWithRadium>
    )
}


export default radium(Link)
