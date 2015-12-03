// third party imports
import chroma from 'chroma-js'
// local imports
import classes from 'assets/styles/js/classes'
import colors from 'assets/styles/js/colors'


const spacing = 25
const containerBase = {
    display: 'flex',
    alignItems: 'center',
    color: chroma(colors.primary.inverse).darken().css(),
    backgroundColor: colors.primary.main,
    borderWidth: '1px 0 0 0',
    borderStyle: 'solid',
    borderColor: colors.background.inverse,
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
        ...classes.interactive.primary,
        color: colors.primary.inverse,
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

    logoProps: {
        hatTopFill: chroma(colors.background.inverse).brighten().css(),
        hatRimFill: chroma(colors.background.inverse).brighten().css(),
        bodyFill: colors.primary.inverse,
        wingFill: colors.primary.inverse,
        noseFill: colors.primary.inverse,
        eyeFill: colors.background.inverse,
        bodyStroke: colors.background.inverse,
        eyeStroke: colors.background.inverse,
        noseStroke: colors.background.inverse,
        wingStroke: colors.background.inverse,
        leftLegStroke: colors.background.inverse,
        leftFootStroke: colors.background.inverse,
        rightLegStroke: colors.background.inverse,
        rightFootStroke: colors.background.inverse,
        hatRimStroke: colors.background.inverse,
        hatTopStroke: colors.background.inverse,
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
        ...classes.interactive.primary,
        textDecoration: 'none',
        color: colors.primary.inverse,
        display: 'inline-block',
    },
}
