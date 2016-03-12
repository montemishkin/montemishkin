// third party imports
import {StyleSheet} from 'aphrodite'
// local imports
import colors from 'styles/js/colors'
import {
    contentWidth,
    contentMaxWidth,
    largestFontSize,
    largerFontSize,
    largeFontSize,
    mainFontSize,
} from 'styles/js/numerics'
import mediaQueries from 'styles/js/mediaQueries'



const spacing = 20
const iconSideLength = 150
const transitionParameters = {
    transitionDuration: '0.8s',
    transitionTimingFunction: 'ease-in-out',
}


export default StyleSheet.create({
    outerContainer: {
        display: 'flex',
        justifyContent: 'center',
        padding: `${spacing * 2}px 0`,
        backgroundColor: colors.secondary.main,
        backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 0.2) 0%, ${colors.secondary.main} 100%)`,
    },


    innerContainer: {
        display: 'flex',
        width: contentWidth,
        maxWidth: contentMaxWidth,
    },


    icon: {
        ...transitionParameters,
        transitionProperty: 'width, height, margin',

        [mediaQueries.medium.lt]: {
            width: 0,
            height: 0,
            margin: 0,
        },

        [mediaQueries.medium.ge]: {
            flexShrink: 0,
            width: iconSideLength,
            height: iconSideLength,
            marginRight: spacing * 2,
        },
    },


    text: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },


    title: {
        ...transitionParameters,
        transitionProperty: 'font-size',
        color: colors.background.inverse,
        margin: spacing,

        [mediaQueries.medium.lt]: {
            fontSize: largerFontSize,
        },

        [mediaQueries.medium.ge]: {
            fontSize: largestFontSize,
        },
    },


    subtitle: {
        ...transitionParameters,
        transitionProperty: 'font-size',
        color: colors.background.inverse,
        margin: `0 ${spacing}px ${spacing}px ${spacing}px`,
        fontWeight: 'normal',

        [mediaQueries.medium.lt]: {
            fontSize: mainFontSize,
        },

        [mediaQueries.medium.ge]: {
            fontSize: largeFontSize,
        },
    },
})
