// third party imports
import React, {Component} from 'react'
import radium from 'radium'
import {Link as ReactRouterLink} from 'react-router'


const ReactRouterLinkWithRadium = radium(ReactRouterLink)


class Link extends Component {
    render() {
        const {style, children, ...unusedProps} = this.props

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
}


export default radium(Link)
