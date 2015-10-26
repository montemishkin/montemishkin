// local imports
import classes from 'styles/classes'


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
        ...classes.darkerFontColor,
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
