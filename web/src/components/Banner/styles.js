// local imports
import colors from 'assets/styles/js/colors'
import {
    contentMaxWidth,
    largestFontSize,
    largeFontSize,
} from 'assets/styles/js/numerics'


const spacing = 40


export default {
    outerContainer: {
        display: 'flex',
        justifyContent: 'center',
        padding: `${spacing}px 0`,
        backgroundColor: colors.secondary.main,
    },

    innerContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '90%',
        maxWidth: contentMaxWidth + 20,
    },

    icon: {
        maxHeight: 150,
        fontSize: '150px',
    },

    title: {
        fontSize: largestFontSize,
        color: colors.background.inverse,
        textAlign: 'center',
        margin: `${spacing}px 0 0 0`,
    },

    subtitle: {
        fontSize: largeFontSize,
        color: colors.background.inverse,
        fontWeight: 'normal',
        textAlign: 'center',
        margin: `${spacing / 2}px 0 ${spacing}px 0`,
    },

    childrenContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
}
