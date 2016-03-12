// third party imports
import {StyleSheet} from 'aphrodite'
import chroma from 'chroma-js'
// local imports
import colors from 'styles/js/colors'
import {
    mainFontSize,
    largeFontSize,
    largerFontSize,
    largestFontSize,
} from 'styles/js/numerics'
import mediaQueries from 'styles/js/mediaQueries'


const spacing = 30
const transitionParameters = {
    transitionDuration: '0.4s',
    transitionTimingFunction: 'ease-in-out',
}


export function createContainerStyle(index = 0) {
    return {
        backgroundColor: chroma(colors.background.main).brighten(0.125 * index).css(),
    }
}


export default StyleSheet.create({
    title: {
        ...transitionParameters,
        transitionProperty: 'font-size',
        padding: '15px 0',
        textAlign: 'center',

        [mediaQueries.medium.lt]: {
            fontSize: largerFontSize,
        },

        [mediaQueries.medium.ge]: {
            fontSize: largestFontSize,
        },
    },


    content: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
    },


    text: {
        ...transitionParameters,
        transitionProperty: 'font-size',
        lineHeight: 1.6,
        textAlign: 'center',
        padding: spacing,
        width: 350,

        [mediaQueries.medium.lt]: {
            fontSize: mainFontSize,
        },

        [mediaQueries.medium.ge]: {
            fontSize: largeFontSize,
        },
    },


    icon: {
        ...transitionParameters,
        transitionProperty: 'width',
        padding: spacing,

        [mediaQueries.medium.lt]: {
            width: 100,
        },

        [mediaQueries.medium.ge]: {
            width: 150,
        },
    },
})
