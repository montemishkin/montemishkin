/*
 * Style sheet for Nav component.
 */

/* local imports */
import colors from '../../../styles/colors'
import numerics from '../../../styles/numerics'


// base styling for both active and inactive links
const link_base = {
    padding: 10,
    textDecoration: 'none',
}

// base styling for all `container` styles
const container_base = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    backgroundColor: colors.grey.darker_bg,
}

// styling for transition parameters
const transition_parameters = {
    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease-in-out',
    transitionProperty: 'color, background-color',
}


// define style sheet
let styles = {
    container_medium: {
        ...container_base,
        justifyContent: 'center',
    },

    container_infinity: {
        ...container_base,
        paddingRight: numerics.root_child_side_padding,
    },

    link: {
        ...link_base,
        padding: 10,
        color: colors.grey.fontish,
        ...transition_parameters,

        ':hover': {
            color: colors.grey.lighter_font,
            ...transition_parameters,
        },
    },

    link_active: {
        ...link_base,
        color: colors.grey.fontish,
        backgroundColor: colors.grey.lighter,
        ...transition_parameters,
    },
}


// export style sheet
export default styles


// end of file
