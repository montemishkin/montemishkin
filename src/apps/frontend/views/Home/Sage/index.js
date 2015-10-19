// third party imports
import React, {Component} from 'react'
import radium from 'radium'
import throttle from 'lodash/function/throttle'
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
const colorMatrix = new ColorMatrix(gameHeight / 20, gameWidth / 20)


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
            isPaused: true,
        }
        // bind instance method so it can be passed as callback
        // also throttle it so that we dont spam resize event
        this.onResize = throttle(this.onResize.bind(this), 100)
    }


    componentDidMount() {
        // determine initial dimensions
        this.onResize()
        // render initial state to the canvas
        colorMatrix.renderTo(this.refs.canvas.getContext('2d'))
        // add resize event handler
        window.addEventListener('resize', this.onResize)
    }


    componentWillUnmount() {
        // cut animation loop
        this.setState({isPaused: true})
        // remove resize event handler
        window.removeEventListener('resize', this.onResize)
    }


    onResize() {
        // the canvas DOM node
        const canvas = this.refs.canvas
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
        })
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
        this.setState({isPaused: false}, () => {
            // if animation was paused at the time of the click event
            // (it wont be anymore when this is callback is executed)
            if (wasPaused) {
                // kick off animation loop
                this.animate()
            }
        })
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
        const {isPaused} = this.state

        return (<div style={styles.outerContainer}>
            <div style={styles.innerContainer}>
                <canvas
                    ref='canvas'
                    style={[
                        styles.canvas,
                        {height: this.state.height},
                    ]}
                    onClick={(event) => this.handleClick(event)}
                    onMouseMove={(event) => this.handleMouseMove(event)}
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
