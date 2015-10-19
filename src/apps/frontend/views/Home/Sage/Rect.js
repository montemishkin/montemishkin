// third party imports
import React, {Component} from 'react'


export default class Rect extends Component {
    render() {
        const {...unusedProps} = this.props

        return (
            <rect
                {...unusedProps}
            />
        )
    }
}
