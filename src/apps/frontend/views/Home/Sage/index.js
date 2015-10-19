// third party imports
import React, {Component} from 'react'
import radium from 'radium'
import throttle from 'lodash/function/throttle'
import isFunction from 'lodash/lang/isFunction'
// local imports
import styles from './styles'
import ColorMatrix from './ColorMatrix'
import map from './map'


function getRelativeCoordinates({pageX, pageY, currentTarget}) {
    return {
        x: pageX - currentTarget.offsetLeft,
        y: pageY - currentTarget.offsetTop,
    }
}

const gameWidth = 1600
const gameHeight = 900
const aspectRatio = gameWidth / gameHeight
// single `ColorMatrix` instance used between all `Sage` components
const colorMatrix = new ColorMatrix(gameHeight / 10, gameWidth / 10)


/**
 * Trippy svg simulation.
 */
@radium
export default class Sage extends Component {
    constructor(...args) {
        // instantiate `this`
        super(...args)
        // set initial state
        this.state = {
            // message to overlay above canvas
            message: 'Touch me?',
            // whether or not the simulation is paused
            isPaused: true,
            // whether or not the simulation has been clicked yet
            wasClicked: false,
            // these will be updated on componentDidMount
            width: 100,
            height: 100,
        }
        // bind instance method so it can be passed as callback
        // also throttle it so that we dont spam resize event
        this.onResize = throttle(this.onResize.bind(this), 100)
    }


    componentDidMount() {
        // add resize event handler
        window.addEventListener('resize', this.onResize)

        // determine initial dimensions, then...
        this.onResize(() => {
            const context = this.refs.canvas.getContext('2d')

            // // iterate through a few states to get smooth look
            // for (var k = 0; k < 200; k++) {
            //     colorMatrix.next()
            // }

            // render state to canvas
            colorMatrix.renderTo(context)
        })
    }


    componentWillUnmount() {
        // cut animation loop
        this.setState({isPaused: true})
        // remove resize event handler
        window.removeEventListener('resize', this.onResize)
    }


    onResize(cb) {
        // the canvas DOM node
        const canvas = this.refs.canvas
        // the width of the canvas DOM node
        const width = canvas.clientWidth
        // the desired height of the canvas DOM node
        const height = width / aspectRatio

        // set canvas dimensions desired dimensions to avoid stretching
        canvas.width = width
        canvas.height = height

        // rerender to the canvas
        colorMatrix.renderTo(canvas.getContext('2d'))

        this.setState({width, height}, () => isFunction(cb) ? cb() : null)
    }


    animate() {
        const {isPaused} = this.state

        // iterate to next state of color matrix
        colorMatrix.next()
            // and then render to the canvas
            .renderTo(this.refs.canvas.getContext('2d'))

        // if animation is not paused
        if (!isPaused) {
            // then keep it going
            requestAnimationFrame(() => this.animate())
        }
    }


    handleClick() {
        // to reference later in callback
        const wasPaused = this.state.isPaused

        // ensure paused flag is unset, then...
        this.setState(
            {
                isPaused: false,
                wasClicked: true,
            }, () => {
                // if animation was paused at the time of the click event
                // (it wont be anymore when this is callback is executed)
                if (wasPaused) {
                    // kick off animation loop
                    this.animate()
                }
            }
        )
    }


    handleMouseMove(event) {
        const {x, y} = getRelativeCoordinates(event)
        const width = window.innerWidth
        const height = window.innerWidth / aspectRatio

        colorMatrix.kColor = map(x, 0, width, 0, 3.5)
        colorMatrix.kSpace = map(y, 0, height, 0, 2.5)
    }


    togglePause() {
        // to reference later in callback
        const wasPaused = this.state.isPaused

        // flip paused state, then...
        this.setState({isPaused: !wasPaused}, () => {
            // if animation was paused at the time of the click event
            // (it wont be anymore when this is callback is executed)
            if (wasPaused) {
                // kick off animation loop
                this.animate()
            }
        })
    }


    reset() {
        colorMatrix.randomize()
    }


    render() {
        const {message, wasClicked, height, isPaused} = this.state

        return (<div style={styles.outerContainer}>
            <div style={styles.innerContainer}>
                <div
                    style={[
                        styles.canvasOverlay,
                        wasClicked && styles.fadeOut,
                        {height: height},
                    ]}
                    onClick={(event) => this.handleClick(event)}
                    onMouseMove={(event) => this.handleMouseMove(event)}
                >
                    {message}
                </div>
                <canvas
                    ref='canvas'
                    style={[
                        styles.canvas,
                        {height: height},
                    ]}
                />
                <div style={styles.controls}>
                    <button
                        ref='toggle'
                        style={styles.button}
                        onClick={() => this.togglePause()}
                    >
                        {isPaused ? 'Play' : 'Pause'}
                    </button>
                    <button
                        ref='reset'
                        style={styles.button}
                        onClick={() => this.reset()}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>)
    }
}


// end of file
