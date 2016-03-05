// local imports
import colors from 'assets/styles/js/colors'
import {
    contentMaxWidth,
    largestFontSize,
    largerFontSize,
    largeFontSize,
    mainFontSize,
} from 'assets/styles/js/numerics'



const spacing = 20
const iconSideLength = 150
const transitionParameters = {
    transitionDuration: '0.8s',
    transitionTimingFunction: 'ease-in-out',
}
const iconBase = {
    ...transitionParameters,
    transitionProperty: 'width height margin',
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
        // TODO: dont hardcode the color here?
        boxShadow: '0 3px 30px rgba(0, 0, 0, 0.3)',
    },


    innerContainer: {
        display: 'flex',
        // TODO: this 80% should be a numeric to keep in sync with main content width
        width: '80%',
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
