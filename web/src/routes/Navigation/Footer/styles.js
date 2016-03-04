// third party imports
import chroma from 'chroma-js'
// local imports
import classes from 'assets/styles/js/classes'
import colors from 'assets/styles/js/colors'


const spacing = 15
const containerBase = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors.primary.main,
    // TODO: dont hardcode the color here?
    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.3)',
}
const navLinksBase = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
}
const copyrightBase = {
    color: chroma(colors.primary.inverse).darken().css(),
    padding: spacing,
}
const linkBase = {
    ...classes.interactive.primary,
    color: colors.primary.inverse,
    display: 'inline-block',
    textDecoration: 'none',
}


export default {
    containerMedium: {
        ...containerBase,
        flexDirection: 'column',
    },

    containerInfinity: {
        ...containerBase,
        justifyContent: 'center',
        position: 'relative',
    },

    navLinksInfinity: {
        ...navLinksBase,
        position: 'absolute',
        left: spacing,
        top: 0,
    },

    navLinksMedium: {
        ...navLinksBase,
    },

    navLink: {
        ...linkBase,
        padding: `${spacing}px ${spacing * 4 / 3}px`,
    },

    copyrightInfinity: {
        ...copyrightBase,
        position: 'absolute',
        right: spacing,
        top: 0,
    },

    copyrightMedium: {
        ...copyrightBase,
    },

    emailLink: {
        ...linkBase,
    },
}
