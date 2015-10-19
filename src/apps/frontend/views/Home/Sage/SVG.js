// third party imports
import React, {Component} from 'react'


export default class SVG extends Component {
    render() {
        const {children, ...unusedProps} = this.props

        return (
            <svg
                {...unusedProps}
            >
                {children}
            </svg>
        )
    }
}
