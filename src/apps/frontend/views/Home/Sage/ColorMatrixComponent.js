// third party imports
import React, {Component, PropTypes} from 'react'
// local imports
import G from './G'
import Rect from './Rect'


export default class ColorMatrix extends Component {
    static propTypes = {
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        colorMatrix: PropTypes.object.isRequired,
    }


    render() {
        const {
            height,
            width,
            colorMatrix,
            ...unusedProps,
        } = this.props

        const cellWidth = width / colorMatrix.cols
        const cellHeight = height / colorMatrix.rows

        return (
            <G {...unusedProps}>
                {colorMatrix.map(({color, i, j}, key) => (
                    <Rect
                        key={key}
                        x={j * cellWidth}
                        y={i * cellHeight}
                        width={cellWidth}
                        height={cellHeight}
                        fill={color.toString()}
                    />
                ))}
            </G>
        )
    }
}
