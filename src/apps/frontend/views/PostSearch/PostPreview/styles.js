// local imports
import classes from 'styles/classes'


export default {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },

    dateAndTagListWrapper: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingTop: 7,
        paddingBottom: 7,
    },

    tagListWrapper: {
    },

    creationDate: {
        ...classes.lighterFontColor,
    },

    title: {
        ...classes.linkHoverable,
        ...classes.largerFontSize,
        ...classes.mainFontColor,
    },

    content: {
        ...classes.linkHoverable,
        ...classes.mainFontColor,
        marginLeft: '5%',
        maxWidth: '90%',
    },
}


// end of file
