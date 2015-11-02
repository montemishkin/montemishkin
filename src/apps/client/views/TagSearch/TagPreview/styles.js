// local imports
import classes from 'styles/classes'
import colors from 'styles/colors'
import {contentWidth, contentMaxWidth} from 'styles/numerics'


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
        color: colors.text.css(),
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
