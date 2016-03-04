// local imports
import colors from 'assets/styles/js/colors'
import classes from 'assets/styles/js/classes'


const spacing = 15


export default {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: `0 ${spacing}px`,
        backgroundColor: colors.primary.main,
        // TODO: dont hardcode the color here?
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
        // this makes the box shadow visible from under the next element
        position: 'relative',
    },


    rightLinks: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },


    link: {
        ...classes.interactive.primary,
        color: colors.primary.inverse,
        display: 'inline-block',
        padding: `${spacing}px ${spacing * 4 / 3}px`,
    },
}
