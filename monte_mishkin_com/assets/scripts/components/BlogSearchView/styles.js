/**
 * Style sheet for BlogSearchView component.
 */


// half of space between two post list items
const half_post_list_item_space = 7


// define style sheet
let styles = {
    message: {
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

    search_bar_label: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
    },

    search_bar_label_text: {
        display: 'flex',
        alignItems: 'center',
    },

    search_bar: {
        flexGrow: 1,
        marginLeft: 3,
    },
}


// export style sheet
export default styles


// end of file
