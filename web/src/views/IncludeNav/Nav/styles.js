// local imports
import colors from 'assets/styles/js/colors'
import classes from 'assets/styles/js/classes'


const padding = 20


export default {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: `0 ${padding}px`,
        backgroundColor: colors.ui.css(),
        borderWidth: '0 0 1px 0',
        borderStyle: 'solid',
        borderColor: colors.uiText.css(),
    },

    logoLink: {
        display: 'inline-block',
        padding: `${padding / 2}px ${padding}px`,
    },

    logo: {
        height: 2 * padding,
    },

    list: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },

    link: {
        ...classes.linkHoverable,
        color: colors.text.brighten(3).css(),
        display: 'inline-block',
        padding: padding,
    },
}
