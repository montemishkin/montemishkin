/**
 * Style sheet for BusinessCard component.
 */

/* local imports */
import colors from '../../../styles/colors'


// define style sheet
let styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    image: {
        width: 200,
        height: 200,
    },

    name_and_address: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },

    name: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: 30,
    },

    address: {
    },

    address_list: {
        flexGrow: 1,
        padding: 0,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        listStyleType: 'none',
        margin: 0,
    },

    address_list_item_link: {
        color: colors.grey.darkest,
        textDecoration: 'none',
    },

    figure: {
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    icon: {
        height: 32,
    }
}


// export style sheet
export default styles


// end of file
