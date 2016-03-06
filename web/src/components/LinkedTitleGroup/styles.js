// third party imports
import chroma from 'chroma-js'
// local imports
import classes from 'styles/js/classes'
import colors from 'styles/js/colors'
import {
    largerFontSize,
    largeFontSize,
} from 'styles/js/numerics'


const transition = {
    ...classes.transitionParameters,
    transitionProperty: 'color',
}
const titleBase = {
    ...transition,
    textAlign: 'center',
    fontSize: largerFontSize,
    paddingBottom: 10,
}
const subtitleBase = {
    ...transition,
    textAlign: 'center',
    fontSize: largeFontSize,
}


export default {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },


    link: {
        textDecoration: 'none',
    },


    title: {
        ...titleBase,
        color: colors.background.inverse,
    },


    titleHovered: {
        ...titleBase,
        color: colors.background.interactive,
    },


    subtitle: {
        ...subtitleBase,
        color: chroma(colors.background.inverse).brighten().css(),
    },


    subtitleHovered: {
        ...subtitleBase,
        color: colors.background.interactive,
    },
}
