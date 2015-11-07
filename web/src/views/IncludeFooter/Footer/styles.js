// local imports
import classes from 'assets/styles/js/classes'
import colors from 'assets/styles/js/colors'


const padding = 20
const containerBase = {
    color: colors.text.brighten(2).css(),
    ...classes.smallFontSize,
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
    padding: 20,
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
        left: padding,
    },

    listMedium: {
        ...listBase,
    },

    navLink: {
        ...classes.linkHoverable,
        color: colors.text.brighten(3).css(),
        display: 'inline-block',
        padding: padding,
    },

    logoLink: {
        display: 'inline-block',
        padding: `${padding / 2}px ${padding}px`,
    },

    logo: {
        height: 2 * padding,
    },

    copyrightInfinity: {
        ...copyrightBase,
        position: 'absolute',
        right: padding,
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
