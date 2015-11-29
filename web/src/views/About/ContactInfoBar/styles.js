// local imports
import classes from 'assets/styles/js/classes'
import colors from 'assets/styles/js/colors'
import {largerFontSize} from 'assets/styles/js/numerics'


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
        color: colors.text,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    icon: {
        fontSize: largerFontSize,
        paddingBottom: 3,
    },

    caption: {
        fontStyle: 'normal',
    },
}
