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

// base styling common to all link styles
const linkBase = {
    textDecoration: 'none',
}

// styling for links that change color on hover
const linkHoverable = {
    ...linkBase,
    ...transitionParameters,
    // display: 'flex',
    transitionProperty: 'color',
    cursor: 'pointer',

    ':hover': {
        color: colors.textInteractive,
    },

    ':focus': {
        color: colors.textInteractive,
    },
}

// styling for ui links that change color on hover
const uiLinkHoverable = {
    ...linkBase,
    ...transitionParameters,
    // display: 'flex',
    transitionProperty: 'color',
    cursor: 'pointer',

    ':hover': {
        color: colors.uiInteractive,
    },

    ':focus': {
        color: colors.uiInteractive,
    },
}



export default {
    transitionParameters,
    linkHoverable,
    uiLinkHoverable,
}
