// third party imports
import React, {Component} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import ColorMatrix from './ColorMatrix'
import SVG from './SVG'
import ColorMatrixComponent from './ColorMatrixComponent'
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
    }


    componentWillUnmount() {
        // cut animation loop
        this.setState({isPaused: true})
    }


    animate() {
        const wasPaused = this.state.isPaused

        // iterate to next state of color matrix
        colorMatrix.next()

        // force rerender
        this.forceUpdate(() => {
            // if animation was not paused
            if (!wasPaused) {
                // then keep it going
                requestAnimationFrame(() => this.animate())
            }
        })
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
                <SVG
                    style={styles.svg}
                    viewBox={`0 0 ${gameWidth} ${gameHeight}`}
                    onClick={(event) => this.handleClick(event)}
                    onMouseMove={(event) => this.handleMouseMove(event)}
                >
                    <ColorMatrixComponent
                        width={gameWidth}
                        height={gameHeight}
                        colorMatrix={colorMatrix}
                    />
                </SVG>
                <div style={styles.controls}>
                    <button
                        style={styles.controlButton}
                        onClick={() => this.togglePause()}
                    >
                        {isPaused ? 'Play' : 'Pause'}
                    </button>
                    <button
                        style={styles.controlButton}
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
