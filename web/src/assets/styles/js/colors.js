/**
 * Site-wide color scheme.
 */

// third party imports
import random from 'lodash/number/random'


const colors = {
    primary: {
        main: '#37598b',
        inverse: '#eceff1',
        interactive: '#000000',
    },

    secondary: {
        main: '#44B78B',
        inverse: '#343c3f',
        interactive: '#9837b5',
    },

    background: {
        main: '#e8eaee',
        inverse: '#343c3f',
        interactive: '#9837b5',
    },





    // declarative
    interactive: '#00A1DC', // '#9837B5',
    interactiveInverse: '#515357',
    text: '#343C3F',
    textInverse: '#E8EAEE',
    textInteractive: 'white',
    ui: '#37598B',
    uiInverse: '#eceff1',
    uiInteractive: 'black',
    // imperative
    palette: {
        green: '#44B78B',
        // purple: '#8C64A5',
        // blue: '#6588CE',
    },
}


colors.palette.random = () => {
    const keys = Object.keys(colors.palette).filter(key => key !== 'random')

    return colors.palette[keys[random(keys.length - 1)]]
}


export default colors
