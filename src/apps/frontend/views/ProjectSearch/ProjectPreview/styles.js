// local imports
import colors from 'styles/colors'
import classes from 'styles/classes'


// transition styling
const transition = {
    ...classes.transitionParameters,
    transitionProperty: 'borderColor',
}


export default {
    container: {
        display: 'flex',
        alignItems: 'stretch',
    },

    image: {
        ...transition,
        marginRight: 10,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        height: 140,
        width: 140,

        ':hover': {
            ...transition,
            borderColor: colors.grey.linkHover,
        },
    },

    notImage: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        flexGrow: 1,
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
