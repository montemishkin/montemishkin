// local imports
import colors from 'styles/colors'
import classes from 'styles/classes'


export default {
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

    project_heading_wrapper: {
        display: 'flex',
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        borderColor: colors.grey.darker_bg,
        // paddingTop: 7,
        paddingBottom: 10,
    },

    project_heading_right: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexGrow: 1,
        paddingLeft: 20,
    },

    title: {
        ...classes.larger_font_size,
        ...classes.main_font_color,
        textAlign: 'center',
    },

    date_and_tag_list_wrapper: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
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


// end of file
