// local imports
// import colors from 'styles/colors'
import classes from 'styles/classes'


export default {
    container: {
    },

    infoContainer: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    creationDate: {
        ...classes.lighterFontColor,
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
}
