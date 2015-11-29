/**
 * Site-wide color scheme.
 */

// third party imports
import random from 'lodash/number/random'


const colors = {
    // declarative
    interactive: '#00A1DC',
    text: '#343C3F',
    textInverse: '#E8EAEE',
    ui: '#333435',
    uiInverse: '#eceff1',
    // imperative
    palette: {
        paleGreen: '#59B342',
        skyBlue: '#8CB2FF',
        sunburn: '#f1793f',
        sand: '#f0e38f',
        marble: '#d7d7d7',
    },
}


colors.palette.random = () => {
    const keys = Object.keys(colors.palette).filter(key => key !== 'random')

    return colors.palette[keys[random(keys.length - 1)]]
}


export default colors
