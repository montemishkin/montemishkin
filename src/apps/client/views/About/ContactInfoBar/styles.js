// local imports
import classes from 'styles/classes'
import colors from 'styles/colors'


export default {
    container: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    list: {
        flexGrow: 1,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        listStyleType: 'none',
        margin: '0 10px',
    },

    listItem: {
        padding: 10,
    },

    link: {
        ...classes.linkHoverable,
        color: colors.text.css(),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    icon: {
        ...classes.largerFontSize,
        paddingBottom: 3,
    },

    caption: {
        fontStyle: 'normal',
    },
}