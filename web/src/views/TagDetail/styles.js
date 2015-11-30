// local imports
import classes from 'assets/styles/js/classes'
import colors from 'assets/styles/js/colors'


export default {
    tabTitleContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        padding: 20,
        cursor: 'pointer',
        ...classes.interactive.background,
    },


    tabTitleContent: {
        paddingRight: 20,
    },


    tabTitleCount: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary.main,
        color: colors.primary.inverse,
        border: '0px solid black',
        borderRadius: 10,
        padding: '0 10px',
    },
}
