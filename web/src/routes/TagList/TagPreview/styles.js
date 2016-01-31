// local imports
import classes from 'assets/styles/js/classes'
import colors from 'assets/styles/js/colors'
import {contentWidth, contentMaxWidth, largeFontSize} from 'assets/styles/js/numerics'


export default {
    container: {
        ...classes.interactive.background,
        color: colors.background.inverse,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: contentWidth,
        maxWidth: contentMaxWidth,
    },

    icon: {
        fontSize: largeFontSize,
        paddingRight: 10,
    },

    titleBar: {
        display: 'flex',
        alignItems: 'center',
    },

    title: {
        fontSize: largeFontSize,
        textAlign: 'center',
    },

    description: {
        paddingTop: 10,
        textAlign: 'center',
    },
}
