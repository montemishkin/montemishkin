// local imports
import classes from 'styles/classes'


export default {
    container: {},

    icon: {
        height: 15,
        marginRight: 4,
    },

    link: {
        ...classes.linkHoverable,
        ...classes.darkerFontColor,
        display: 'flex',
        alignItems: 'center',
        paddingBottom: 3,
    },
}
