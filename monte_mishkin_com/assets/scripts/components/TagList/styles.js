/**
 * Style sheet for TagList component.
 */

/* local imports */
import colors from '../../../styles/colors'


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
        backgroundColor: '#DDE8F2',
        transition: 'background-color 0.2s ease-in-out',

        ':hover': {
            backgroundColor: '#D1E0EB',
            transition: 'background-color 0.2s ease-in-out',
        },
    },

    link: {
        textDecoration: 'none',
        color: 'black',

        // ':hover': {
        //     textDecoration: 'underline',
        // },
    },
}


// export style sheet
export default styles


// end of file
