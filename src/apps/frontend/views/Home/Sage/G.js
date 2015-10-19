// third party imports
import React, {Component} from 'react'


export default class G extends Component {
    render() {
        const {children, ...unusedProps} = this.props

        return (
            <g {...unusedProps}>
                {children}
            </g>
        )
    }
}
