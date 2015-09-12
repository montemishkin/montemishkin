/**
 * Style sheet for BlogPostPreview component.
 */

/* local imports */
import colors from '../../../styles/colors'


// styling for transition parameters
const transition_parameters = {
    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease-in-out',
    transitionProperty: 'color',
}

// base styling common to all links
const link_base = {
    textDecoration: 'none',
    display: 'flex',
    ...transition_parameters,

    ':hover': {
        color: colors.grey.link_hover,
        ...transition_parameters,
    },
}


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
        ...link_base,
        fontSize: 30,
        color: colors.grey.header,
    },

    date: {
        ...link_base,
        color: colors.grey.subheader,
    },

    content: {
        ...link_base,
        marginLeft: '5%',
        maxWidth: '90%',
        color: colors.grey.header,
    },
}


// export style sheet
export default styles


// end of file
