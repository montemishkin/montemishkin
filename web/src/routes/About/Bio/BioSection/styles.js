// third party imports
import chroma from 'chroma-js'
// local imports
import colors from 'assets/styles/js/colors'
import {
    mainFontSize,
    largeFontSize,
    largerFontSize,
    largestFontSize,
    contentWidth,
    contentMaxWidth,
    contentVerticalPadding,
} from 'assets/styles/js/numerics'


const spacing = 30
const transitionParameters = {
    transitionDuration: '0.4s',
    transitionTimingFunction: 'ease-in-out',
    transitionProperty: 'font-size',
}
const outerContainerBase = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
}
const titleBase = {
    ...transitionParameters,
    padding: '15px 0',
    textAlign: 'center',
}
const textBase = {
    ...transitionParameters,
    lineHeight: 1.6,
    textAlign: 'center',
    padding: spacing,
    width: 350,
}


export function createOuterContainerStyle(index = 0) {
    return {
        ...outerContainerBase,
        backgroundColor: chroma(colors.background.main).brighten(0.125 * index),
    }
}


export default {
    innerContainer: {
        width: contentWidth,
        maxWidth: contentMaxWidth,
        padding: `${contentVerticalPadding}px 0`,
    },


    titleMedium: {
        ...titleBase,
        fontSize: largerFontSize,
    },


    titleInfinity: {
        ...titleBase,
        fontSize: largestFontSize,
    },


    content: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
    },


    textMedium: {
        ...textBase,
        fontSize: mainFontSize,
    },


    textInfinity: {
        ...textBase,
        fontSize: largeFontSize,
    },


    icon: {
        padding: spacing,
        width: 150,
    },
}
