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
 * @arg {number} domain_min - The lower bound of the domain.
 * @arg {number} domain_max - The upper bound of the domain.
 * @arg {number} range_min - The lower bound of the range.
 * @arg {number} range_max - The upper bound of the range.
 */
export function map(value, domain_min, domain_max, range_min, range_max) {
    return (((range_max - range_min) / (domain_max - domain_min))
        * (value - domain_min)) + range_min
}
