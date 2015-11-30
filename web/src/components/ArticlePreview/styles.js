// third party imports
import chroma from 'chroma-js'
// local imports
import classes from 'assets/styles/js/classes'
import colors from 'assets/styles/js/colors'
import {
    contentWidth,
    contentMaxWidth,
    largerFontSize,
    largeFontSize,
} from 'assets/styles/js/numerics'


const transition = {
    ...classes.transitionParameters,
    transitionProperty: 'color',
}
const titleBase = {
    ...transition,
    fontSize: largerFontSize,
    paddingBottom: 10,
}
const subtitleBase = {
    ...transition,
    fontSize: largeFontSize,
}


export default {
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: contentWidth,
        maxWidth: contentMaxWidth,
    },

    infoBar: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: '7px 0',
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
