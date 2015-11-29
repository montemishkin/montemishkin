// local imports
import classes from 'assets/styles/js/classes'
import colors from 'assets/styles/js/colors'


export default {
    container: {
        display: 'flex',
        alignItems: 'center',
    },

    icon: {
        height: 15,
    },

    list: {
        listStyleType: 'none',
        padding: '0 3px',
        display: 'flex',
        flexWrap: 'wrap',
    },

    listItem: {
        margin: '0 3px',
        padding: '2px 3px',
    },

    link: {
        ...classes.linkHoverable,
        color: colors.text,
    },
}
