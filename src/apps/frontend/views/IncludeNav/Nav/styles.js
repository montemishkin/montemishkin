// local imports
import colors from 'styles/colors'
import classes from 'styles/classes'


const padding = 20


export default {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: padding,
        paddingRight: padding,
        backgroundColor: colors.ui.css(),
        borderWidth: '0 0 1px 0',
        borderStyle: 'solid',
        borderColor: colors.uiText.css(),
    },

    logoLink: {
        display: 'inline-block',
        paddingTop: padding / 2,
        paddingBottom: padding / 2,
        paddingLeft: padding,
        paddingRight: padding,
    },

    logo: {
        height: 2 * padding,
    },

    list: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyleType: 'none',
        margin: 0,
        padding: 0,
    },

    link: {
        ...classes.linkHoverable,
        color: colors.text.brighten(3).css(),
        display: 'inline-block',
        padding: padding,
    },
}
