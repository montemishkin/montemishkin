// local imports
// import colors from 'styles/colors'
import classes from 'styles/classes'


export default {
    outerContainer: {
        borderTopWidth: 1,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderStyle: 'solid',
        borderColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 40,
        paddingBottom: 40,
    },

    innerContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '90%',
        maxWidth: 760,
    },

    image: {
        padding: '30px 0',
        maxHeight: 150,
    },

    title: {
        ...classes.largerFontSize,
        ...classes.darkerFontColor,
        textAlign: 'center',
        margin: 0,
        paddingTop: 20,
    },

    subtitle: {
        ...classes.mainFontSize,
        ...classes.mainFontColor,
        fontWeight: 'normal',
        textAlign: 'center',
        margin: 0,
        paddingTop: 20,
    },

    childrenContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        paddingTop: 30,
    },
}
