/**
 * Sitewide "CSS" classes.
 */

// local imports
import colors from './colors'


/* Font Size Classes */

export const largestFontSize = {
    fontSize: 36,
    fontWeight: 400,
}

export const largerFontSize = {
    fontSize: 30,
}

export const largeFontSize = {
    // fontSize: 14,
    // fontWeight: 700,
    fontSize: 24,
}

export const mainFontSize = {
    fontSize: 16,
}

export const smallFontSize = {
    fontSize: 13,
}


/* Font Color Classes */

export const darkerFontColor = {
    color: colors.grey.link,
}

export const darkFontColor = {
    color: colors.grey.fontish,
}

export const mainFontColor = {
    color: colors.grey.header,
}

export const lightFontColor = {
    color: colors.grey.lighterFont,
}

export const lighterFontColor = {
    color: colors.grey.subheader,
}


/* Misc Classes */

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

    ':hover': {
        color: colors.grey.linkHover,
    },
}

// export const header


/* export object with all classes as default */

export default {
    largestFontSize,
    largerFontSize,
    largeFontSize,
    mainFontSize,
    smallFontSize,

    darkerFontColor,
    darkFontColor,
    mainFontColor,
    lightFontColor,
    lighterFontColor,

    transitionParameters,
    linkBase,
    linkHoverable,
}


// end of file
