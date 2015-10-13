// local imports
import {mod} from './util'
import Vector3 from './Vector3'


/**
 * Two dimensional array of colors capable of being animated.
 * @class
 */
export default class ColorBoard {
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
        this.kDecay = 0.02

        /* Variables altered by user */

        // true if the simulation is paused
        this.paused = true
        // differential equation parameter determining color-color coupling
        this.kColor = 1
        // differential equation parameter determining color-space coupling
        this.kSpace = 1
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
     * @arg {number} kColor - The color-color coupling parameter.
     * @arg {number} kSpace - The color-space coupling parameter.
     */
    setCouplingParameters(kColor, kSpace) {
        this.kColor = kColor
        this.kSpace = kSpace
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
        const cellWidth = Math.floor(width / this.cols)
        const cellHeight = Math.floor(height / this.rows)
        // padding necessary to keep rendered cells centered on the canvas
        // due to flooring of cell dimensions
        const paddingX = Math.floor(mod(width, this.cols) / 2)
        const paddingY = Math.floor(mod(height, this.rows) / 2)

        // clear the canvas
        context.clearRect(0, 0, width, height)

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                // location of upper left corner of cell
                const x = paddingX + (j * cellWidth)
                const y = paddingY + (i * cellHeight)

                // set fill style to cell's color
                context.fillStyle = this.array[i][j].css()
                // fill the cell
                context.fillRect(x, y, cellWidth, cellHeight)
            }
        }
    }


    /**
     * Iterates the simulation forward one step in time.
     */
    iterate() {
        const nextArray = []

        for (let i = 0; i < this.rows; i++) {
            nextArray[i] = []

            for (let j = 0; j < this.cols; j++) {
                nextArray[i][j] = this.nextAt(i, j)
            }
        }

        this.array = nextArray
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
    nextAt(i, j) {
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
        const dcColor = c.copy()
            // cross with small vector in first octant
            .cross(Vector3.randomComponentsBetween(0, 2))
            // subtract small decay contribution
            .minus(c.copy().scale(this.kDecay))
            // scale by color-color coupling constant
            .scale(this.kColor)
        // infinitesimal change in color caused by space
        const dcSpace = Vector3.sum(
            this.at(i + 1, j),
            this.at(i - 1, j),
            this.at(i, j + 1),
            this.at(i, j - 1),
            c.copy().scale(-4)
        // scale by color-space coupling constant
        ).scale(this.kSpace)

        // return the original value...
        return c.copy()
            // shifted by total color change over infinitesimal time step
            .plus(Vector3.sum(dcColor, dcSpace).scale(this.dt))
            // trimmed down to be an actual RGB color
            .trim(0, 255)
    }
}


// end of file
