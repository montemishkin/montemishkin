/**
 * Style sheet for Sage component.
 */

/* local imports */
import colors from '../../../styles/colors'
import classes from '../../../styles/classes'


// styling for transition parameters
const transition = {
    ...classes.transition_parameters,
    transitionProperty: 'background-color',
}


// define style sheet
let styles = {
    outer_container: {
        display: 'flex',
        justifyContent: 'center',
    },

    inner_container: {
        width: '100%',
    },

    canvas: {
        width: '100%',
        // height must be set dynamically based on width
    },

    controls: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingTop: 5,
    },

    button: {
        ...transition,
        borderStyle: 'solid',
        borderWidth: 0,
        borderRadius: 3,
        padding: 10,
        color: colors.grey.white,
        backgroundColor: colors.grey.link_hover,
        cursor: 'pointer',
        textDecoration: 'none',

        ':hover': {
            ...transition,
            backgroundColor: colors.grey.link_hover_darker,
        },
    },
}


// export style sheet
export default styles


// end of file
