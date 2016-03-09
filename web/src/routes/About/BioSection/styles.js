// third party imports
import chroma from 'chroma-js'
// local imports
import colors from 'styles/js/colors'
import {
    mainFontSize,
    largeFontSize,
    largerFontSize,
    largestFontSize,
} from 'styles/js/numerics'


const spacing = 30
const transitionParameters = {
    transitionDuration: '0.4s',
    transitionTimingFunction: 'ease-in-out',
}
const titleBase = {
    ...transitionParameters,
    transitionProperty: 'font-size',
    padding: '15px 0',
    textAlign: 'center',
}
const textBase = {
    ...transitionParameters,
    transitionProperty: 'font-size',
    lineHeight: 1.6,
    textAlign: 'center',
    padding: spacing,
    width: 350,
}
const iconBase = {
    ...transitionParameters,
    transitionProperty: 'width',
    padding: spacing,
}


export function createContainerStyle(index = 0) {
    return {
        backgroundColor: chroma(colors.background.main).brighten(0.125 * index).css(),
    }
}


export default {
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


    iconMedium: {
        ...iconBase,
        width: 100,
    },


    iconInfinity: {
        ...iconBase,
        width: 150,
    },
}
