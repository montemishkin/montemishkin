// local imports
import classes from 'assets/styles/js/classes'
import colors from 'assets/styles/js/colors'


export default {
    list: {
        listStyleType: 'none',
        padding: '0 3px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },


    listItem: {
        margin: '0 3px',
        padding: '2px 3px',
    },


    link: {
        ...classes.interactive.background,
        color: colors.background.inverse,
    },
}
