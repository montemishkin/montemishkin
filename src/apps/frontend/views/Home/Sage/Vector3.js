/**
 * Three dimensional vector with some color related methods.
 * @class
 */
export default class Vector3 {
    /**
     * Return a new `Vector3` with the given components.
     * @arg {number} x - The x component.
     * @arg {number} y - The y component.
     * @arg {number} z - The z component.
     */
    constructor(x, y, z) {
        if (typeof x !== 'number') {
            throw new TypeError()
        }
        if (typeof y !== 'number') {
            throw new TypeError()
        }
        if (typeof z !== 'number') {
            throw new TypeError()
        }

        this.x = x
        this.y = y
        this.z = z
    }


    /**
     * Return a random vector that is a valid RGB color.
     */
    static randomColor() {
        return new Vector3(
            Math.round(255 * Math.random()),
            Math.round(255 * Math.random()),
            Math.round(255 * Math.random())
        )
    }


    /**
     * Return a vector with each component being a random number between `min`
     * and `max`.
     * @arg {number} min - The minimum value for a component.
     * @arg {number} max - The maximum value for a component.
     */
    static randomComponentsBetween(min, max) {
        const scale = max - min

        return new Vector3(
            (scale * Math.random()) + min,
            (scale * Math.random()) + min,
            (scale * Math.random()) + min
        )
    }


    /**
     * Return the vector that is the sum of all the arguments.
     */
    static sum(...args) {
        const result = new Vector3(0, 0, 0)

        for (const arg of args) {
            result.plus(arg)
        }

        return result
    }


    /**
     * Return a new vector with the same components as this one.
     */
    copy() {
        return new Vector3(this.x, this.y, this.z)
    }


    /**
     * Return a css string describing the vector as an RGB color.
     * This does NOT ensure that the RGB values are valid.
     */
    css() {
        return `rgb(${this.x}, ${this.y}, ${this.z})`
    }


    /**
     * Changes the calling vector to become `this` x `other`.
     * @arg {Vector3} other - The other vector to cross with.
     * @returns this
     */
    cross(other) {
        const nextX = (this.y * other.z) - (this.z * other.y)
        const nextY = (this.z * other.x) - (this.x * other.z)
        const nextZ = (this.x * other.y) - (this.y * other.x)

        this.x = nextX
        this.y = nextY
        this.z = nextZ

        return this
    }


    /**
     * Changes the calling vector to become `this` + `other`.
     * @arg {Vector3} other - The other vector to add to `this`.
     * @returns this
     */
    plus(other) {
        this.x += other.x
        this.y += other.y
        this.z += other.z

        return this
    }


    /**
     * Changes the calling vector to become `this` - `other`.
     * @arg {Vector3} other - The other vector to subtract from `this`.
     * @returns this
     */
    minus(other) {
        this.x -= other.x
        this.y -= other.y
        this.z -= other.z

        return this
    }


    /**
     * Changes the calling vector to be scaled by `scalar`.
     * @arg {number} scalar - The scalar by which to scale `this`.
     * @returns this
     */
    scale(scalar) {
        this.x *= scalar
        this.y *= scalar
        this.z *= scalar

        return this
    }


    /**
     * Trims each component of the calling vector to be between `min` and `max`.
     * @arg {number} min - The lower bound for trimming.
     * @arg {number} max - The upper bound for trimming.
     * @returns this
     */
    trim(min, max) {
        this.x = Math.round(this.x)
        this.y = Math.round(this.y)
        this.z = Math.round(this.z)

        if (this.x < min) {
            this.x = min
        } else if (this.x > max) {
            this.x = max
        }

        if (this.y < min) {
            this.y = min
        } else if (this.y > max) {
            this.y = max
        }

        if (this.z < min) {
            this.z = min
        } else if (this.z > max) {
            this.z = max
        }

        return this
    }
}


export default Vector3


// end of file
