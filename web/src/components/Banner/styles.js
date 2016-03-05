// local imports
import colors from 'assets/styles/js/colors'
import {
    contentMaxWidth,
    largestFontSize,
    largeFontSize,
} from 'assets/styles/js/numerics'


const spacing = 40
const iconSideLength = 150
const iconBase = {
    transitionDuration: '0.8s',
    transitionTimingFunction: 'ease-in-out',
    transitionProperty: 'width margin',
    height: iconSideLength,
}


export default {
    outerContainer: {
        display: 'flex',
        justifyContent: 'center',
        padding: `${spacing}px 0`,
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
        margin: 0,
    },


    iconInfinity: {
        ...iconBase,
        width: iconSideLength,
        marginRight: spacing,
    },


    text: {
    },


    title: {
        fontSize: largestFontSize,
        color: colors.background.inverse,
        margin: spacing / 2,
    },


    subtitle: {
        fontSize: largeFontSize,
        color: colors.background.inverse,
        margin: spacing / 2,
        fontWeight: 'normal',
    },
}
