/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* local imports */
import styles from './styles'
import ColorBoard from './ColorBoard'
import {map} from './util'


// single `ColorBoard` instance used between all `Sage` components
const color_board = new ColorBoard(100, 100)


/**
 * Trippy canvas simulation.
 * @class
 */
@radium
class Sage extends React.Component {
    constructor(...args) {
        super(...args)

        this.state = {
            height: 200,
            width: 200,
        }
    }


    componentDidMount() {
        // the canvas DOM node
        const canvas = this.refs.canvas.getDOMNode()
        // the width of the canvas DOM node
        const width = canvas.clientWidth
        // the desired height of the canvas DOM node
        const height = width * 9 / 16

        // set canvas dimensions to its DOM node dimensions so that
        // no stretching occurs
        canvas.width = width
        canvas.height = height

        //
        this.setState({
            height: height,
            width: width,
        }, () => {
            // trigger the color board to play its animation
            color_board.play(canvas.getContext('2d'))
        })
    }


    componentWillUnmount() {
        // pause the color board's animation
        color_board.pause()
    }


    render() {
        return (<div style={styles.container}>
            <canvas
                ref='canvas'
                style={[
                    styles.canvas,
                    {height: this.state.height},
                ]}
                onClick={() => color_board.randomize()}
                onMouseMove={(event) => {
                    // mouse coordinates relative to canvas DOM node
                    const x = event.pageX - event.target.offsetLeft
                    const y = event.pageY - event.target.offsetTop

                    color_board.setCouplingParameters(
                        map(x, 0, this.state.width, 0, 3.5),
                        map(y, 0, this.state.height, 0, 2.5)
                    )
                }}
            />
        </div>)
    }
}


// export component
export default Sage


// end of file
