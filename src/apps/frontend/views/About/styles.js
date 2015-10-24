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
    },

    banner: {
        backgroundColor: '#EFBAC0',
    },

    contentContainer: {
        display: 'flex',
        justifyContent: 'center',
    },

    content: {
        paddingTop: 100,
        paddingBottom: 100,
        width: '70%',
        maxWidth: 740,
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
