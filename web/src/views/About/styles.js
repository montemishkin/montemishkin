// local imports
import classes from 'styles/classes'
import colors from 'styles/colors'
import {
    contentWidth,
    contentMaxWidth,
    contentVerticalPadding,
} from 'styles/numerics'


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
