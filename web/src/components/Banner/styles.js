// local imports
import colors from 'assets/styles/js/colors'
import classes from 'assets/styles/js/classes'
import {contentMaxWidth} from 'assets/styles/js/numerics'


export default {
    outerContainer: {
        display: 'flex',
        justifyContent: 'center',
        padding: '40px 0',
    },

    innerContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '90%',
        maxWidth: contentMaxWidth + 20,
    },

    icon: {
        padding: '30px 0',
        maxHeight: 150,
    },

    title: {
        ...classes.largerFontSize,
        color: colors.text.css(),
        textAlign: 'center',
        paddingTop: 20,
    },

    subtitle: {
        ...classes.mainFontSize,
        color: colors.text.brighten().css(),
        fontWeight: 'normal',
        textAlign: 'center',
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
