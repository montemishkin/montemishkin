/* local imports */
import {mod} from './util'
import Vector3 from './Vector3'


/**
 * Two dimensional array of colors capable of being animated.
 * @class
 */
class ColorBoard {
    /**
     * Create a new `ColorBoard` instance.
     * @arg {number} rows - How many rows the board should have.
     * Must be positive integer.
     * @arg {number} cols - How many columns the board should have.
     * Must be positive integer.
     */
    constructor(rows, cols) {
        // check that `rows` and `cols` are valid
        if (Math.floor(rows) !== rows) {
            throw new TypeError('`rows` must be an integer')
        }
        if (rows < 1) {
            throw new RangeError('`rows` must be positive')
        }
        if (Math.floor(cols) !== cols) {
            throw new TypeError('`cols` must be an integer')
        }
        if (cols < 1) {
            throw new RangeError('`cols` must be positive')
        }

        /* Variables never changed */

        // board dimensions (in units of cells, not pixels)
        this.rows = rows
        this.cols = cols
        // infinitesimal time step
        this.dt = 0.1
        // differential equation parameter determining color decay
        this.k_decay = 0.02

        /* Variables altered by user */

        // true if the simulation is paused
        this.paused = true
        // differential equation parameter determining color-color coupling
        this.k_color = 1
        // differential equation parameter determining color-space coupling
        this.k_space = 1
        // can be set to hold a canvas context using `bindToContext`
        this.context = null

        /* Variables altered by simulation */

        // populate `this.array` with random colors
        this.randomize()
    }


    /**
     * Returns true if the simulation is paused.  False otherwise.
     */
    isPaused() {
        return this.paused
    }


    /**
     * Sets the array to random colors.
     */
    randomize() {
        this.array = []

        // randomize the 2D color array
        for (let i = 0; i < this.rows; i++) {
            this.array[i] = []

            for (let j = 0; j < this.cols; j++) {
                this.array[i][j] = Vector3.randomColor()
            }
        }
    }


    /**
     * Sets the coupling parameters of the differential equation governing the
     * board simulation.
     * @arg {number} k_color - The color-color coupling parameter.
     * @arg {number} k_space - The color-space coupling parameter.
     */
    setCouplingParameters(k_color, k_space) {
        this.k_color = k_color
        this.k_space = k_space
    }


    /**
     * Stores a reference to the rendering context on `this`.
     * @arg {CanvasRenderingContext2D} context - Rendering context to bind to.
     */
    bindToContext(context) {
        this.context = context
    }


    /**
     * Returns a data URL containing a snapshot of the canvas context.
     */
    toDataURL(ctx) {
        // default to using argument as rendering context
        let context = ctx
        // if no context passed
        if (typeof ctx === 'undefined') {
            // then use the bound context
            context = this.context
            // if no bound context
            if (this.context === null) {
                // then complain
                throw new Error('no rendering context provided')
            }
        }

        return context.canvas.toDataURL()
    }


    /**
     * Plays the simulation on the given context.
     * @arg {CanvasRenderingContext2D} ctx - Rendering context to draw to.
     */
    play(ctx) {
        // default to using argument as rendering context
        let context = ctx
        // if no context passed
        if (typeof ctx === 'undefined') {
            // then use the bound context
            context = this.context
            // if no bound context
            if (this.context === null) {
                // then complain
                throw new Error('no rendering context provided')
            }
        }

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
     * Toggles between pause and play.
     * @arg {CanvasRenderingContext2D} ctx - Rendering context to draw to.
     */
    togglePausePlay(ctx) {
        // default to using argument as rendering context
        let context = ctx
        // if no context passed
        if (typeof ctx === 'undefined') {
            // then use the bound context
            context = this.context
            // if no bound context
            if (this.context === null) {
                // then complain
                throw new Error('no rendering context provided')
            }
        }

        // if no context provided and no bound context
        if (typeof context === 'undefined' && this.context === null) {
            // then complain
            throw new Error('must pass a context to `play`, or be bound to one')
        }
        // if paused
        if (this.paused) {
            // then play
            this.play(context)
        // otherwise you are playing
        } else {
            // so pause
            this.pause()
        }
    }


    /**
     * If not paused, then draw a single animation frame and request the next
     * animation frame.
     * @arg {CanvasRenderingContext2D} ctx - Rendering context to draw to.
     */
    mainLoop(ctx) {
        // default to using argument as rendering context
        let context = ctx
        // if no context passed
        if (typeof ctx === 'undefined') {
            // then use the bound context
            context = this.context
            // if no bound context
            if (this.context === null) {
                // then complain
                throw new Error('no rendering context provided')
            }
        }

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
     * @arg {CanvasRenderingContext2D} ctx - Rendering context to draw to.
     */
    render(ctx) {
        // default to using argument as rendering context
        let context = ctx
        // if no context passed
        if (typeof ctx === 'undefined') {
            // then use the bound context
            context = this.context
            // if no bound context
            if (this.context === null) {
                // then complain
                throw new Error('no rendering context provided')
            }
        }

        // dimensions of the entire canvas
        const width = context.canvas.width
        const height = context.canvas.height
        // dimensions of a single cell
        const cell_width = width / this.cols
        const cell_height = height / this.rows

        // clear the canvas
        context.clearRect(0, 0, width, height)

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                // location of upper left corner of cell
                const x = j * cell_width
                const y = i * cell_height

                // set fill style to cell's color
                context.fillStyle = this.array[i][j].css()
                // fill the cell
                context.fillRect(x, y, cell_width, cell_height)
            }
        }
    }


    /**
     * Iterates the simulation forward one step in time.
     */
    iterate() {
        let next_array = []

        for (let i = 0; i < this.rows; i++) {
            next_array[i] = []

            for (let j = 0; j < this.cols; j++) {
                next_array[i][j] = this.next_at(i, j)
            }
        }

        this.array = next_array
    }


    /**
     * Returns the value at a given location on the board (toroidally).
     * @arg {number} i - The "y" index. Must be an integer.
     * @arg {number} j - The "x" index. Must be an integer.
     */
    at(i, j) {
        // ensure that `i` and `j` are integers
        if (Math.floor(i) !== i) {
            throw new TypeError('`i` must be an integer')
        }
        if (Math.floor(j) !== j) {
            throw new TypeError('`j` must be an integer')
        }

        return this.array[mod(i, this.rows)][mod(j, this.cols)]
    }


    /**
     * Returns the next value in the simulation at a given location on the
     * board (toroidally).
     * @arg {number} i - The "y" index. Must be an integer.
     * @arg {number} j - The "x" index. Must be an integer.
     */
    next_at(i, j) {
        // ensure that `i` and `j` are integers
        if (Math.floor(i) !== i) {
            throw new TypeError('`i` must be an integer')
        }
        if (Math.floor(j) !== j) {
            throw new TypeError('`j` must be an integer')
        }

        // current color at given coordinates
        const c = this.at(i, j)
        // infinitesimal change in color caused by color
        const dc_color = c.copy()
            // cross with small vector in first octant
            .cross(Vector3.randomComponentsBetween(0, 2))
            // subtract small decay contribution
            .minus(c.copy().scale(this.k_decay))
            // scale by color-color coupling constant
            .scale(this.k_color)
        // infinitesimal change in color caused by space
        const dc_space = Vector3.sum(
            this.at(i + 1, j),
            this.at(i - 1, j),
            this.at(i, j + 1),
            this.at(i, j - 1),
            c.copy().scale(-4)
        // scale by color-space coupling constant
        ).scale(this.k_space)

        // return the original value...
        return c.copy()
            // shifted by total color change over infinitesimal time step
            .plus(Vector3.sum(dc_color, dc_space).scale(this.dt))
            // trimmed down to be an actual RGB color
            .trim(0, 255)
    }
}


export default ColorBoard


// end of file
