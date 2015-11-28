// local imports
import classes from 'assets/styles/js/classes'
import colors from 'assets/styles/js/colors'


// base styling for tab titles
const tabTitleBase = {
    display: 'inline-block',
    textAlign: 'center',
    width: '100%',
    padding: 20,
}


export default {
    tabTitleContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        padding: 20,
        cursor: 'pointer',
        ...classes.linkHoverable,
    },


    tabTitleContent: {
        paddingRight: 20,
    },


    tabTitleCount: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // TODO: move to colors.js
        backgroundColor: colors.ui.css(),
        color: colors.uiText.css(),
        border: '0px solid black',
        borderRadius: 10,
        padding: '0 10px',
    },
}
