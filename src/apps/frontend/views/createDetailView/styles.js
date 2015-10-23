// local imports
import colors from 'styles/colors'
import classes from 'styles/classes'


export default {
    container: {
    },

    loadingImageWrapper: {
        display: 'flex',
        justifyContent: 'center',
    },

    loadingImage: {
        height: 50,
    },

    errorMessage: {
        textAlign: 'center',
    },

    title: {
        ...classes.largerFontSize,
        ...classes.mainFontColor,
        textAlign: 'center',
    },

    postContainer: {
    },

    dateAndTagListWrapper: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        borderColor: colors.grey.darkerBg,
        paddingTop: 7,
        paddingBottom: 7,
    },

    creationDate: {
        ...classes.lighterFontColor,
    },

    tagListWrapper: {
    },

    postContent: {
    },
}


// end of file
