// local imports
import colors from 'styles/colors'


// half of space between two list items
const half_list_item_space = 7

// base styling common to all `list_item` styles
const list_item_base = {
    margin: half_list_item_space,

    borderStyle: 'solid',
    borderColor: colors.grey.darker_bg,
    borderTopWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    paddingBottom: 15,
    paddingTop: 15,
}


export default {
    list: {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    list_item: {
        ...list_item_base,
        borderBottomWidth: 0,
    },

    list_item_last: {
        ...list_item_base,
        borderBottomWidth: 1,
    },
}


// end of file
