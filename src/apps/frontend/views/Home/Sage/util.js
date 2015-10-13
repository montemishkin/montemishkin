/**
 * Utility functions related to the ColorBoard simulation.
 */


/**
 * True mathematical modulo.
 */
export function mod(n, m) {
    return n - (m * Math.floor(n / m))
}


/**
 * Maps a value from one range to another.
 * @arg {number} value - The value to map.
 * @arg {number} domainMin - The lower bound of the domain.
 * @arg {number} domainMax - The upper bound of the domain.
 * @arg {number} rangeMin - The lower bound of the range.
 * @arg {number} rangeMax - The upper bound of the range.
 */
export function map(value, domainMin, domainMax, rangeMin, rangeMax) {
    return (((rangeMax - rangeMin) / (domainMax - domainMin))
        * (value - domainMin)) + rangeMin
}
