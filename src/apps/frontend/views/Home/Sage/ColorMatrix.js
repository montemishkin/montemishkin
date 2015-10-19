// local imports
import Color from './Color'
import mod from './mod'


/**
 * Two dimensional array of colors capable of being animated.
 * @class
 */
export default class ColorBoard {
    constructor(rows, cols) {
        // ensure that `rows` and `cols` are positive integers
        if (rows <= 0 || !Number.isFinite(rows) || cols <= 0 || !Number.isFinite(cols)) {
            throw new Error(
                `expected positive, finite integers, got: ${rows}, ${cols}`
            )
        }

        this._rows = rows
        this._cols = cols

        // initialize `this._matrix` to random colors
        this.randomize()

        // infinitesimal time step
        this.dt = 0.1
        // differential equation parameter determining color decay
        this.kDecay = 0.02
        // differential equation parameter determining color-color coupling
        this.kColor = 1
        // differential equation parameter determining color-space coupling
        this.kSpace = 1
    }


    get rows() {
        return this._rows
    }


    get cols() {
        return this._cols
    }


    /**
     * Sets the matrix to random colors.
     */
    randomize() {
        this._matrix = []

        for (var i = 0; i < this._rows; i++) {
            this._matrix[i] = []

            for (var j = 0; j < this._cols; j++) {
                this._matrix[i][j] = Color.random()
            }
        }
    }


    /**
     * Maps over the flattened matrix using the given callback to determine
     * the mapping.  The mapping will be passed `{color, i, j}, index` at each
     * cell.
     */
    map(fn) {
        // reduce over the rows in the matrix
        return this._matrix.reduce(
            // return the result of reducing over the colors in each row
            ({result, index}, row, i) => row.reduce(
                // return the accumulator with the mapped color and the next key
                ({result: _result, index: _index}, color, j) => ({
                    result: _result.concat(fn({color, i, j}, _index)),
                    index: _index + 1,
                }),
                // take the outer accumulator as the initial value
                {result, index}
            ),
            // start with an empty array and zero based index
            {result: [], index: 0}
        ).result
    }


    /**
     * Iterates the simulation forward one step in time.
     */
    next() {
        this._matrix = this._matrix.map(
            (row, i) => row.map(
                (color, j) => this.nextAt(i, j)
            )
        )

        return this


        // const nextMatrix = []
        //
        // for (var i = 0; i < this.rows; i++) {
        //     nextMatrix[i] = []
        //
        //     for (var j = 0; j < this.cols; j++) {
        //         nextMatrix[i][j] = this.nextAt(i, j)
        //     }
        // }
        //
        // this._matrix = nextMatrix
    }


    /**
     * Returns the value at a given location on the board (toroidally).
     * @arg {number} i - The "y" index. Must be an integer.
     * @arg {number} j - The "x" index. Must be an integer.
     */
    at(i, j) {
        // ensure that `i` and `j` are integers
        if (Math.floor(i) !== i || Math.floor(j) !== j) {
            throw new Error(`expected integers, got: ${i}, ${j}`)
        }

        return this._matrix[mod(i, this._rows)][mod(j, this._cols)]
    }


    /**
     * Returns the next value in the simulation at a given location on the
     * board (NOT toroidally).
     * @arg {number} i - The "y" index. Must be an integer.
     * @arg {number} j - The "x" index. Must be an integer.
     */
    nextAt(i, j) {
        // ensure that `i` and `j` are integers within the matrix dimensions
        if (i < 0 || i >= this._rows || Math.floor(i) !== i || j < 0 || j >= this._cols || Math.floor(j) !== j) {
            throw new Error(
                `expected integers in [0, ${this._rows}) and [0, ${this._cols}],`
                + ` got: ${i}, ${j}`
            )
        }

        // current color at given coordinates
        const color = this._matrix[i][j]
        // infinitesimal change in color caused by color
        const dcColor = color
            // cross with small vector in first octant
            .cross(Color.randomComponentsBetween(0, 2))
            // subtract small decay contribution
            .minus(color.scale(this.kDecay))
            // scale by color-color coupling constant
            .scale(this.kColor)
        // infinitesimal change in color caused by space
        const dcSpace = color.scale(-4)
            .plus(this.at(i + 1, j))
            .plus(this.at(i - 1, j))
            .plus(this.at(i, j + 1))
            .plus(this.at(i, j - 1))
            // scale by color-space coupling constant
            .scale(this.kSpace)

        // return the original value...
        return color
            // shifted by total color change over infinitesimal time step
            .plus(dcColor.plus(dcSpace).scale(this.dt))
            // trimmed down to be an actual RGB color
            .trim(0, 255)
    }
}


// end of file
