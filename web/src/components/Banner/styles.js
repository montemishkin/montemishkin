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



const spacing = 20
const iconSideLength = 150
const transitionParameters = {
    transitionDuration: '0.8s',
    transitionTimingFunction: 'ease-in-out',
}
const iconBase = {
    ...transitionParameters,
    transitionProperty: 'width, height, margin',
}
const titleBase = {
    ...transitionParameters,
    transitionProperty: 'font-size',
    color: colors.background.inverse,
    margin: spacing,
}
const subtitleBase = {
    ...transitionParameters,
    transitionProperty: 'font-size',
    color: colors.background.inverse,
    margin: `0 ${spacing}px ${spacing}px ${spacing}px`,
    fontWeight: 'normal',
}


export default {
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


    iconMedium: {
        ...iconBase,
        width: 0,
        height: 0,
        margin: 0,
    },


    iconInfinity: {
        ...iconBase,
        flexShrink: 0,
        width: iconSideLength,
        height: iconSideLength,
        marginRight: spacing * 2,
    },


    text: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },


    titleMedium: {
        ...titleBase,
        fontSize: largerFontSize,
    },


    titleInfinity: {
        ...titleBase,
        fontSize: largestFontSize,
    },


    subtitleMedium: {
        ...subtitleBase,
        fontSize: mainFontSize,
    },


    subtitleInfinity: {
        ...subtitleBase,
        fontSize: largeFontSize,
    },
}
