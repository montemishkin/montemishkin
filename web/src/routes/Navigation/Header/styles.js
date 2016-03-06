// local imports
import colors from 'styles/js/colors'
import classes from 'styles/js/classes'
import {contentWidth, contentMaxWidth} from 'styles/js/numerics'


export default {
    outerContainer: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: colors.primary.main,
    },


    innerContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        width: contentWidth,
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
