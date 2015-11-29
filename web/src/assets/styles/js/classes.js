/**
 * Sitewide "CSS" classes.
 */

// local imports
import colors from './colors'


// parameters (everything except transitionProperty) for css transitions
export const transitionParameters = {
    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease-in-out',
}

// base styling common to all link styles
export const linkBase = {
    textDecoration: 'none',
}

// styling for links that change color on hover
export const linkHoverable = {
    ...linkBase,
    ...transitionParameters,
    // display: 'flex',
    transitionProperty: 'color',
    cursor: 'pointer',

    ':hover': {
        color: colors.interactive,
    },

    ':focus': {
        color: colors.interactive,
    },
}



export default {
    transitionParameters,
    linkHoverable,
}
