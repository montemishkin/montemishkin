// local imports
import classes from 'styles/classes'


export default {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },

    date_and_tag_list_wrapper: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingTop: 7,
        paddingBottom: 7,
    },

    tag_list_wrapper: {
    },

    creation_date: {
        ...classes.lighter_font_color,
    },

    title: {
        ...classes.link_hoverable,
        ...classes.larger_font_size,
        ...classes.main_font_color,
    },

    content: {
        ...classes.link_hoverable,
        ...classes.main_font_color,
        marginLeft: '5%',
        maxWidth: '90%',
    },
}


// end of file
