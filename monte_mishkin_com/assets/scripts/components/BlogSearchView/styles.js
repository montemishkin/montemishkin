/**
 * Style sheet for BlogSearchView component.
 */


// half of space between two post list items
const half_post_list_item_space = 7


// define style sheet
let styles = {
    spinner: {
    },

    alert: {
    },

    post_list: {
        listStyleType: 'none',
        margin: 0,
        padding: half_post_list_item_space,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    post_list_item: {
        margin: half_post_list_item_space,
    },

    post_link: {
        // padding: 0,
        // margin: 0,
    },

    filter_label: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
    },

    filter_label_text: {
        display: 'flex',
        alignItems: 'center',
    },

    filter: {
        flexGrow: 1,
        marginLeft: 3,
    },
}


// export style sheet
export default styles


// end of file
