/**
 * Sitewide "CSS" classes.
 */

// local imports
import colors from './colors'


// parameters (everything except transitionProperty) for css transitions
const transitionParameters = {
    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease-in-out',
}


function createInteractiveClass({interactive}) {
    return {
        ...transitionParameters,
        transitionProperty: 'color',
        ':hover': {
            color: interactive,
        },
        ':focus': {
            color: interactive,
        },
    }
}


export default {
    transitionParameters,
    interactive: {
        primary: createInteractiveClass(colors.primary),
        secondary: createInteractiveClass(colors.secondary),
        background: createInteractiveClass(colors.background),
    },
}
