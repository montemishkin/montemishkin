// local imports
import classes from 'styles/classes'


// base styling common to all blockquote styles
const blockquoteBase = {
    ...classes.largeFontSize,
    width: '50%',
    fontStyle: 'italic',
    fontFamily: 'serif',
    quotes: '"\u201C""\u201D""\u2018""\u2019"',
}


export default {
    container: {
        padding: 100,
    },

    blockquoteMedium: {
        ...blockquoteBase,
        margin: '0 auto',
        textAlign: 'center',
    },

    blockquoteInfinity: {
        ...blockquoteBase,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: '40%',
        textAlign: 'right',
    },
}


// end of file
