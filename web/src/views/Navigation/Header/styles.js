// local imports
import colors from 'assets/styles/js/colors'
import classes from 'assets/styles/js/classes'
import {largeFontSize} from 'assets/styles/js/numerics'


const spacing = 25


export default {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: `0 ${spacing}px`,
        backgroundColor: colors.ui,
        borderWidth: '0 0 1px 0',
        borderStyle: 'solid',
        borderColor: colors.uiInverse,
    },

    logoLink: {
        display: 'inline-block',
        padding: `${spacing / 2}px ${spacing}px`,
    },

    logo: {
        height: 2 * spacing,
    },

    list: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },

    link: {
        ...classes.linkHoverable,
        fontSize: largeFontSize,
        color: colors.uiInverse,
        display: 'inline-block',
        padding: spacing,
    },
}
