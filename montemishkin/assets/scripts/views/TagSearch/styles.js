/**
 * Style sheet for TagSearch component.
 */

/* local imports */
import colors from 'styles/colors'
import classes from 'styles/classes'


// styling for outline transition
const transition = {
    ...classes.transition_parameters,
    transitionProperty: 'outline',
}


// define style sheet
let styles = {
    container: {
        ...classes.page_content_container,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    image: {
    },

    no_tag_message: {
    },

    no_search_result_message: {
    },

    search_bar: {
        ...transition,
        width: '100%',
        marginBottom: 10,
        textAlign: 'center',
        outlineWidth: 1,
        outlineOffset: -1,
        outlineStyle: 'solid',
        outlineColor: 'transparent',

        ':focus': {
            outlineColor: colors.primary.lightest,
            ...transition,
        },
    },
}


// export style sheet
export default styles


// end of file
