// local imports
import classes from 'assets/styles/js/classes'
import colors from 'assets/styles/js/colors'
import {
    contentWidth,
    contentMaxWidth,
    contentVerticalPadding,
} from 'assets/styles/js/numerics'


// base styling common to all blockquote styles
const blockquoteBase = {
    ...classes.largeFontSize,
    width: '50%',
    fontStyle: 'italic',
    fontFamily: 'serif',
    quotes: '"\u201C""\u201D""\u2018""\u2019"',
}


export default {
    banner: {
        backgroundColor: colors.palette.paleGreen.css(),
    },

    contentContainer: {
        display: 'flex',
        justifyContent: 'center',
    },

    content: {
        padding: `${contentVerticalPadding}px 0`,
        width: contentWidth,
        maxWidth: contentMaxWidth,
    },

    blockquoteMedium: {
        ...blockquoteBase,
        margin: '0 auto',
        textAlign: 'center',
    },

    blockquoteInfinity: {
        ...blockquoteBase,
        marginLeft: '40%',
        textAlign: 'right',
    },
}
