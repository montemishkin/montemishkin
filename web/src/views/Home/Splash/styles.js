// local imports
import classes from 'assets/styles/js/classes'
import colors from 'assets/styles/js/colors'


export default {
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        // TODO: make it cycle between the colors in colors.palette
        backgroundColor: colors.palette.paleGreen.css(),
    },


    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
    },


    header: {
        ...classes.largestFontSize,
        textAlign: 'center',
        margin: 30,
        color: colors.text.darken(2).css(),
    },


    logo: {
        height: '40%',
        maxHeight: 350,
    },


    nav: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },


    navLink: {
        ...classes.linkHoverable,
        ...classes.largerFontSize,
        color: colors.text.darken().css(),
        margin: 30,
        textDecoration: 'none',
    },


    scrollButtonContainer: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: 15,
    },


    scrollButton: {
        ...classes.linkHoverable,
        ...classes.largestFontSize,
        backgroundColor: 'transparent',
        border: 0,
        outline: 0,
    },
}
