// local imports
import classes from 'assets/styles/js/classes'
import colors from 'assets/styles/js/colors'


const spacing = 25
const containerBase = {
    color: colors.text.brighten(2).css(),
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors.ui.css(),
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
        color: colors.text.brighten(3).css(),
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
        color: colors.text.brighten(3).css(),
        display: 'inline-block',
    },
}
