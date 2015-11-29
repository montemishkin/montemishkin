// local imports
import classes from 'assets/styles/js/classes'
import colors from 'assets/styles/js/colors'
import {contentWidth, contentMaxWidth} from 'assets/styles/js/numerics'


export default {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: contentWidth,
        maxWidth: contentMaxWidth,
    },

    icon: {
        ...classes.largeFontSize,
        paddingRight: 10,
    },

    link: {
        ...classes.linkHoverable,
        color: colors.text,
        display: 'flex',
        alignItems: 'center',
    },

    title: {
        textAlign: 'center',
    },

    description: {
        paddingTop: 10,
        textAlign: 'center',
    },
}
