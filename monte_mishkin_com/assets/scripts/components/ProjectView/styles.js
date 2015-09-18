/**
 * Style sheet for Project component.
 */

/* local imports */
import colors from '../../../styles/colors'
import classes from '../../../styles/classes'


// define style sheet
let styles = {
    container: {
        ...classes.page_content_container,
    },

    loading_image_wrapper: {
        display: 'flex',
        justifyContent: 'center',
    },

    loading_image: {
        height: 50,
    },

    error_message: {
        textAlign: 'center',
    },

    title: {
        ...classes.larger_font_size,
        ...classes.main_font_color,
        // textAlign: 'center',
    },

    project_container: {
    },

    date_and_tag_list_wrapper: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        // flexDirection: 'column-reverse',
        // alignItems: 'center',
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        borderColor: colors.grey.darker_bg,
        paddingTop: 7,
        paddingBottom: 7,
    },

    creation_date: {
        ...classes.lighter_font_color,
    },

    tag_list_wrapper: {
    },

    project_image_wrapper: {
        display: 'flex',
        justifyContent: 'center',
    },

    project_image: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        height: 200,
        width: 200,
    },

    project_content: {
    },
}


// export style sheet
export default styles


// end of file
