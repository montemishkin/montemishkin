/**
 * Style sheet for BlogPostPreview component.
 */

/* local imports */
import classes from '../../../styles/classes'


// define style sheet
let styles = {
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
        display: 'flex',
    },

    title: {
        ...classes.link_hoverable,
        ...classes.larger_font_size,
        ...classes.main_font_color,
    },

    date: {
        ...classes.link_hoverable,
        ...classes.lighter_font_color,
    },

    content: {
        ...classes.link_hoverable,
        ...classes.main_font_color,
        marginLeft: '5%',
        maxWidth: '90%',
    },
}


// export style sheet
export default styles


// end of file
