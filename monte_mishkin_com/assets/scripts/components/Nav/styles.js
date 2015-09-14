/*
 * Style sheet for Nav component.
 */

/* local imports */
import colors from '../../../styles/colors'
import classes from '../../../styles/classes'


// base styling for both active and inactive links
const link_base = {
    ...classes.link_hoverable,
    ...classes.dark_font_color,
    padding: 10,
}

// base styling for all `container` styles
const inner_container_base = {
    ...classes.root_child_container,
    display: 'flex',
    flexWrap: 'wrap',
}

// styling for color and background-color transition
const transition = {
    ...classes.transition_parameters,
    transitionProperty: 'color, background-color',
}


// define style sheet
let styles = {
    outer_container: {
        backgroundColor: colors.grey.darker_bg,
    },

    inner_container_medium: {
        ...inner_container_base,
        justifyContent: 'center',
    },

    inner_container_infinity: {
        ...inner_container_base,
        justifyContent: 'flex-end',
    },

    link: {
        ...link_base,
        ...transition,
    },

    link_active: {
        ...link_base,
        ...transition,
        backgroundColor: colors.grey.lighter,
    },
}


// export style sheet
export default styles


// end of file
