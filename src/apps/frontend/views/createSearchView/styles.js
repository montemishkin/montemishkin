// local imports
import colors from 'styles/colors'
// import classes from 'styles/classes'


export default {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
    },

    banner: {
        backgroundColor: '#8CB2FF',
    },

    searchBar: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },

    list: {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
    },

    listItem: {
        display: 'flex',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderColor: colors.grey.darkerBg,
        borderTopWidth: 1,
        borderBottomWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        paddingBottom: 80,
        paddingTop: 80,
    },

    noItemMessage: {
    },

    noSearchResultMessage: {
    },
}


// end of file
