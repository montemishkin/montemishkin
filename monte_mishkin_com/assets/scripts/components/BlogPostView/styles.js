/**
 * Style sheet for BlogPostView component.
 */

/* local imports */
import colors from '../../../styles/colors'
import numerics from '../../../styles/numerics'


// styling for transition parameters
const transition_parameters = {
    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease-in-out',
    transitionProperty: 'color',
}


// define style sheet
let styles = {
    container: {
        maxWidth: numerics.max_page_width,
        margin: '0 auto',
    },

    image: {
    },

    post_container: {
    },

    creation_date: {
        textDecoration: 'none',
        color: colors.grey.link,
        ...transition_parameters,

        ':hover': {
            color: colors.grey.link_hover,
            ...transition_parameters,
        },
    },

    tag_list: {
    },

    post_content: {
    },

    error: {
    },
}


// export style sheet
export default styles


// end of file
