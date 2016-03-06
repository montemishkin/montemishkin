// third party imports
import chroma from 'chroma-js'
// local imports
import classes from 'styles/js/classes'
import colors from 'styles/js/colors'
import {contentWidth, contentMaxWidth} from 'styles/js/numerics'


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
