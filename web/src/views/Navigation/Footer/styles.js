// third party imports
import chroma from 'chroma-js'
// local imports
import classes from 'assets/styles/js/classes'
import colors from 'assets/styles/js/colors'


const spacing = 25
const containerBase = {
    display: 'flex',
    alignItems: 'center',
    color: chroma(colors.uiInverse).darken().css(),
    backgroundColor: colors.ui,
}
const listBase = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
}
const copyrightBase = {
    padding: spacing,
}


export default {
    containerMedium: {
        ...containerBase,
        flexDirection: 'column',
    },

    containerInfinity: {
        ...containerBase,
        justifyContent: 'center',
    },

    listInfinity: {
        ...listBase,
        position: 'absolute',
        left: spacing,
    },

    listMedium: {
        ...listBase,
    },

    navLink: {
        ...classes.linkHoverable,
        color: colors.uiInverse,
        display: 'inline-block',
        padding: spacing,
    },

    logoLink: {
        display: 'inline-block',
        padding: `${spacing / 2}px ${spacing}px`,
    },

    logo: {
        height: 2 * spacing,
    },

    copyrightInfinity: {
        ...copyrightBase,
        position: 'absolute',
        right: spacing,
    },

    copyrightMedium: {
        ...copyrightBase,
    },

    emailLink: {
        ...classes.linkHoverable,
        color: colors.uiInverse,
        display: 'inline-block',
    },
}
