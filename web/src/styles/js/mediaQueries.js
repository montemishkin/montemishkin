// third party imports
import map from 'lodash/collection/map'
// local imports
import {breakpoints} from 'styles/js/numerics'


if (typeof breakpoints.infinity !== 'undefined') {
    throw new Error('do not define an `infinity` breakpoint')
}


const sortedBreakpoints = map(breakpoints,
    // map to array of `[key, value]` pairs
    (value, key) => [key, value]
// sort by ascending `value`
).sort(([, v1], [, v2]) => v1 - v2)


const infinityMediaQuery = `@media (min-width: ${sortedBreakpoints[sortedBreakpoints.length - 1][1] + 1}px)`

const mediaQueries = {
    infinity: {
        get ge() {
            throw new Error('media query cannot be greater than infinity')
        },
        get gt() {
            throw new Error('media query cannot be greater than infinity')
        },
        le: infinityMediaQuery,
        lt: infinityMediaQuery,
        eq: infinityMediaQuery,
    },
}


for (var i = 0; i < sortedBreakpoints.length; i++) {
    const [breakpoint, width] = sortedBreakpoints[i]

    mediaQueries[breakpoint] = {
        // "greater than or equal"
        ge: `@media (min-width: ${width}px)`,
        // "greater than"
        gt: `@media (min-width: ${width + 1}px)`,
        // "less than or equal"
        le: `@media (max-width: ${width}px)`,
        // "less than"
        lt: `@media (max-width: ${width - 1}px)`,
        // "equal"
        eq: i === 0
            // lowest breakpoint doesn't need a lower bound
            ? `@media (max-width: ${width}px)`
            : `@media (min-width: ${sortedBreakpoints[i - 1][1] + 1}px) and (max-width: ${width}px)`,
    }
}


export default mediaQueries
