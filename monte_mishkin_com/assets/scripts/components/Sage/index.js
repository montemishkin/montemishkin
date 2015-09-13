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
        // instantiate `this`
        super(...args)
        // set initial state
        this.state = {
            height: 200,
            width: 200,
        }
        // bind instance method so it can be passed as callback
        this.onResize = this.onResize.bind(this)
    }


    componentDidMount() {
        // determine initial dimensions, then...
        this.resetDimensions((canvas) => {
            // bind the color board to the rendering context
            color_board.bindToContext(canvas.getContext('2d'))
            // trigger the color board to play its animation
            color_board.play()
        })

        // add resize event handler
        window.addEventListener('resize', this.onResize)
    }


    componentWillUnmount() {
        // pause the color board's animation
        color_board.pause()
        // remove resize event handler
        window.removeEventListener('resize', this.onResize)
    }


    onResize() {
        this.resetDimensions()
    }


    /**
     * Update the canvas dimensions to reflect its DOM node dimensions.
     * Update internal state dimensions.
     * @arg {function} cb - Callback to execute once state is updated.
     * Will be passed the canvas DOM node.
     */
    resetDimensions(cb) {
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

        // update state, passing callback for async
        this.setState({
            height: height,
            width: width,
        }, () => {
            if (cb) {
                cb(canvas)
            }
        })
    }


    render() {
        return (<div style={styles.outer_container}>
            <div style={styles.inner_container}>
                <canvas
                    ref='canvas'
                    style={[
                        styles.canvas,
                        {height: this.state.height},
                    ]}
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
                <div style={styles.controls}>
                    <button
                        type='button'
                        ref='pause'
                        style={styles.button}
                        onClick={() => color_board.togglePausePlay()}
                    >
                        Pause/Play
                    </button>
                    <a
                        type='button'
                        ref='snapshot'
                        style={styles.button}
                        onClick={(event) => {
                            event.target.href = color_board.toDataURL()
                        }}
                        download='color-board.png'
                    >
                        Snapshot
                    </a>
                    <button
                        type='button'
                        ref='reset'
                        style={styles.button}
                        onClick={() => color_board.randomize()}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>)
    }
}


// export component
export default Sage


// end of file
