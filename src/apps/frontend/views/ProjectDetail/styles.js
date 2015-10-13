// local imports
import colors from 'styles/colors'
import classes from 'styles/classes'


export default {
    container: {
        ...classes.pageContentContainer,
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

    projectHeadingWrapper: {
        display: 'flex',
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        borderColor: colors.grey.darkerBg,
        // paddingTop: 7,
        paddingBottom: 10,
    },

    projectHeadingRight: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexGrow: 1,
        paddingLeft: 20,
    },

    title: {
        ...classes.largerFontSize,
        ...classes.mainFontColor,
        textAlign: 'center',
    },

    dateAndTagListWrapper: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    creationDate: {
        ...classes.lighterFontColor,
    },

    tagListWrapper: {
    },

    projectImageWrapper: {
        display: 'flex',
        justifyContent: 'center',
    },

    projectImage: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        height: 200,
        width: 200,
    },

    projectContent: {
    },
}


// end of file
