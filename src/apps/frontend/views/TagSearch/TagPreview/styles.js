// local imports
import classes from 'styles/classes'
import colors from 'styles/colors'


export default {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '70%',
        maxWidth: 740,
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
        textAlign: 'center',
    },
}
