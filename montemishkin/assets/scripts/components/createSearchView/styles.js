// local imports
import colors from 'styles/colors'
import classes from 'styles/classes'


// half of space between two list items
const half_list_item_space = 7

// styling for outline transition
const transition = {
    ...classes.transition_parameters,
    transitionProperty: 'outline',
}


export default {
    container: {
        ...classes.page_content_container,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    image: {
    },

    no_item_message: {
    },

    no_search_result_message: {
    },

    search_bar: {
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

    list_item: {
        margin: half_list_item_space,

        borderStyle: 'solid',
        borderColor: colors.grey.darker_bg,
        borderTopWidth: 1,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        paddingBottom: 15,
        paddingTop: 15,
        borderBottomWidth: 0,
    },
}


// end of file
