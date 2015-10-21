// local imports
import colors from 'styles/colors'
import classes from 'styles/classes'


// half of space between two list items
const halfListItemSpace = 7

// styling for outline transition
const transition = {
    ...classes.transitionParameters,
    transitionProperty: 'outline',
}


export default {
    container: {
        padding: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    image: {
    },

    noItemMessage: {
    },

    noSearchResultMessage: {
    },

    searchBar: {
        ...transition,
        width: '100%',
        marginBottom: 10,
        textAlign: 'center',
        outlineWidth: 1,
        outlineOffset: -1,
        outlineStyle: 'solid',
        outlineColor: 'transparent',

        ':focus': {
            outlineColor: colors.primary.lightest,
            ...transition,
        },
    },

    list: {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    listItem: {
        margin: halfListItemSpace,

        borderStyle: 'solid',
        borderColor: colors.grey.darkerBg,
        borderTopWidth: 1,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        paddingBottom: 15,
        paddingTop: 15,
        borderBottomWidth: 0,
    },
}


// end of file
