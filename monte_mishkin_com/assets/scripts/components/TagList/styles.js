/**
 * Style sheet for TagList component.
 */

/* local imports */
import colors from '../../../styles/colors'


// styling for transition parameters
const transition_parameters = {
    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease-in-out',
    transitionProperty: 'color',
}


// define style sheet
let styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 13,
    },

    image: {
        height: 15,
    },

    names_list: {
        listStyleType: 'none',
        margin: 0,
        paddingLeft: 3,
        paddingRight: 3,
        display: 'flex',
        flexWrap: 'wrap',
    },

    names_list_item: {
        marginLeft: 3,
        marginRight: 3,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 3,
        paddingRight: 3,
    },

    link: {
        textDecoration: 'none',
        color: colors.grey.link,
        ...transition_parameters,

        ':hover': {
            color: colors.grey.link_hover,
            ...transition_parameters,
        },
    },
}


// export style sheet
export default styles


// end of file
