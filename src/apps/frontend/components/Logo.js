// third party imports
import React, {Component} from 'react'


// length of a side of the logo in svg viewbox units
const side = 1000


export default class Logo extends Component {
    render() {
        const {...unusedProps} = this.props

        return (
            <svg {...unusedProps} viewBox={`0 0 ${side} ${side}`}>
                <image
                    xlinkHref='/static/images/bird-logo.png'
                    x='0'
                    y='0'
                    height={side}
                    width={side}
                />
            </svg>
        )
    }
}
