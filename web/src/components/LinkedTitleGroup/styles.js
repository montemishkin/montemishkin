// third party imports
import {StyleSheet} from 'aphrodite'
import chroma from 'chroma-js'
// local imports
import classes from 'styles/js/classes'
import colors from 'styles/js/colors'
import {
    largerFontSize,
    largeFontSize,
    mainFontSize,
} from 'styles/js/numerics'
import mediaQueries from 'styles/js/mediaQueries'


const transition = {
    ...classes.transitionParameters,
    transitionProperty: 'color, font-size',
}
const titleBase = {
    ...transition,
    textAlign: 'center',
    paddingBottom: 10,

    [mediaQueries.medium.lt]: {
        fontSize: largeFontSize,
    },

    [mediaQueries.medium.ge]: {
        fontSize: largerFontSize,
    },
}
const subtitleBase = {
    ...transition,
    textAlign: 'center',

    [mediaQueries.medium.lt]: {
        fontSize: mainFontSize,
    },

    [mediaQueries.medium.ge]: {
        fontSize: largeFontSize,
    },
}


export default StyleSheet.create({
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
})
