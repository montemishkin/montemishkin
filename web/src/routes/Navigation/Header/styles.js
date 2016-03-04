// local imports
import colors from 'assets/styles/js/colors'
import classes from 'assets/styles/js/classes'
import {contentMaxWidth} from 'assets/styles/js/numerics'


export default {
    outerContainer: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: colors.primary.main,
        // TODO: dont hardcode the color here?
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
        // this makes the box shadow visible from under the next element
        // TODO: doesnt work on Home route.  should i resort to z-index???
        position: 'relative',
    },


    innerContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        width: '100%',
        maxWidth: contentMaxWidth,
    },


    link: {
        ...classes.interactive.primary,
        color: colors.primary.inverse,
        display: 'inline-block',
        textDecoration: 'none',
        padding: '15px 20px',
    },
}
