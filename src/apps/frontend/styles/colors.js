/**
 * Site-wide color scheme.
 */

// third party imports
import chroma from 'chroma-js'
import random from 'lodash/number/random'


const colors = {
    // declarative
    interactive: chroma('#00A1DC'),
    text: chroma('#343C3F'),
    ui: chroma('#333435'),
    uiText: chroma('#eceff1'),    // `uiInverse` a better name?
    background: chroma('#E8EAEE'),
    // imperative
    palette: {
        paleGreen: chroma('#59B342'),
        skyBlue: chroma('#8CB2FF'),
        sunburn: chroma('#f1793f'),
        sand: chroma('#f0e38f'),
        marble: chroma('#d7d7d7'),
    },
}


colors.palette.random = () => {
    const keys = Object.keys(colors.palette).filter(key => key !== 'random')

    return colors.palette[keys[random(keys.length - 1)]]
}


export default colors
