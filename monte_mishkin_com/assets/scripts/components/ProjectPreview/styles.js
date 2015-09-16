/**
 * Style sheet for ProjectPreview component.
 */

/* local imports */
import colors from '../../../styles/colors'
import classes from '../../../styles/classes'


// transition styling
const transition = {
    ...classes.transition_parameters,
    transitionProperty: 'borderColor',
}


// define style sheet
let styles = {
    container: {
        display: 'flex',
        alignItems: 'stretch',
    },

    image: {
        ...transition,
        marginRight: 10,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        height: 140,
        width: 140,

        ':hover': {
            ...transition,
            borderColor: colors.grey.link_hover,
        },
    },

    not_image: {
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


// export style sheet
export default styles


// end of file
