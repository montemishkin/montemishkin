/**
 * Two dimensional array of colors capable of being animated.
 * @class
 */
class ColorBoard {
    constructor(rows, cols) {
        // type check, set row and col fields
        // ...

        // true if the simulation is paused
        this.paused = true
        this.x = 0

        // infinitesimal time step
        this.dt = 0.1
    }


    /**
     * Plays the simulation on the given context.
     * @arg {CanvasRenderingContext2D} context - Rendering context to draw to.
     */
    play(context) {
        // reset `paused` flag
        this.paused = false
        // kick off animation loop
        requestAnimationFrame(this.mainLoop.bind(this, context))
    }


    /**
     * Pauses the simulation.
     */
    pause() {
        // set `paused` flag
        this.paused = true
    }


    /**
     * If not paused, then draw a single animation frame and request the next
     * animation frame.
     * @arg {CanvasRenderingContext2D} context - Rendering context to draw to.
     */
    mainLoop(context) {
        // if not paused
        if (!this.paused) {
            // render current frame to context
            this.render(context)
            // iterate simulation state
            this.iterate()
            // trigger next animation frame
            requestAnimationFrame(this.mainLoop.bind(this, context))
        }
    }


    /**
     * Renders the current scene to the context.
     * @arg {CanvasRenderingContext2D} context - Rendering context to draw to.
     */
    render(context) {
        // clear the canvas
        context.clearRect(0, 0, context.canvas.width, context.canvas.height)

        context.fillStyle = 'blue'
        context.fillRect(this.x, 20, 20, 20)
    }


    /**
     * Iterates the simulation forward one step in time.
     */
    iterate() {
        this.x += 1
    }
}


export default ColorBoard


// end of file
