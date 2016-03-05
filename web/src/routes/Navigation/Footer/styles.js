// third party imports
import chroma from 'chroma-js'
// local imports
import classes from 'assets/styles/js/classes'
import colors from 'assets/styles/js/colors'
import {contentWidth, contentMaxWidth} from 'assets/styles/js/numerics'


const verticalSpacing = 15
const horizontalSpacing = verticalSpacing * 4 / 3
const innerContainerBase = {
    display: 'flex',
    width: contentWidth,
    maxWidth: contentMaxWidth,
}
const linkBase = {
    ...classes.interactive.primary,
    color: colors.primary.inverse,
    display: 'inline-block',
    textDecoration: 'none',
}


export default {
    outerContainer: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: colors.primary.main,
        // TODO: dont hardcode the color here?
        boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.3)',
    },


    innerContainerMedium: {
        ...innerContainerBase,
        flexDirection: 'column',
        alignItems: 'center',
    },


    innerContainerInfinity: {
        ...innerContainerBase,
        justifyContent: 'space-between',
    },


    navLinks: {
    },


    navLink: {
        ...linkBase,
        padding: `${verticalSpacing}px ${horizontalSpacing}px`,
    },


    copyright: {
        color: chroma(colors.primary.inverse).darken().css(),
        padding: `${verticalSpacing}px ${horizontalSpacing}px`,
    },


    emailLink: {
        ...linkBase,
    },
}
