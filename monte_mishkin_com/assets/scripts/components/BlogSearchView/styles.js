/**
 * Style sheet for BlogSearchView component.
 */

/* local imports */
import colors from '../../../styles/colors'
import numerics from '../../../styles/numerics'


// half of space between two post list items
const half_post_list_item_space = 7

// styling for transition parameters
const transition_parameters = {
    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease-in-out',
    transitionProperty: 'outline',
}

// base styling common to all `post_list_item` styles
const post_list_item_base = {
    margin: half_post_list_item_space,

    borderStyle: 'solid',
    borderColor: colors.grey.darker_bg,
    borderTopWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    paddingBottom: 15,
    paddingTop: 15,
}


// define style sheet
let styles = {
    container: {
        maxWidth: numerics.max_page_width,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    image: {
    },

    no_post_message: {
    },

    no_search_result_message: {
    },

    post_list: {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        // padding: half_post_list_item_space,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    post_list_item: {
        ...post_list_item_base,
        borderBottomWidth: 0,
    },

    post_list_item_last: {
        ...post_list_item_base,
        borderBottomWidth: 1,
    },

    search_bar: {
        width: '100%',
        marginBottom: 10,
        textAlign: 'center',
        outlineWidth: 1,
        outlineOffset: -1,
        outlineStyle: 'solid',
        outlineColor: 'transparent',
        ...transition_parameters,

        ':focus': {
            outlineColor: colors.primary.lightest,
            ...transition_parameters,
        },
    },
}


// export style sheet
export default styles


// end of file
