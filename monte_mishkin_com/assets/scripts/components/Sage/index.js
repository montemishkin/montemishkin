/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* local imports */
import styles from './styles'
import ColorBoard from './ColorBoard'


// single `ColorBoard` instance used between all `Sage` components
const color_board = new ColorBoard()


/**
 * Trippy canvas simulation.
 * @class
 */
@radium
class Sage extends React.Component {
    componentDidMount() {
        // trigger the color board to play its animation
        color_board.play(this.refs.canvas.getDOMNode().getContext('2d'))
    }


    componentWillUnmount() {
        // pause the color board's animation
        color_board.pause()
    }


    render() {
        return (<canvas
            ref='canvas'
            style={styles.canvas}
        />)
    }
}


// export component
export default Sage


// end of file
