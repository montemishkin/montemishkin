/**
 * Style sheet for BlogPostView component.
 */

/* local imports */
import classes from '../../../styles/classes'


// define style sheet
let styles = {
    container: {
        ...classes.page_content_container,
    },

    image: {
    },

    title: {
        ...classes.larger_font_size,
        ...classes.main_font_color,
    },

    post_container: {
    },

    date_and_tag_list_wrapper: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingTop: 7,
        paddingBottom: 7,
    },

    creation_date: {
        ...classes.lighter_font_color,
    },

    tag_list_wrapper: {
    },

    post_content: {
    },

    error: {
    },
}


// export style sheet
export default styles


// end of file
