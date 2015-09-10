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
        padding: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: colors.grey.darkest,
        backgroundColor: colors.grey.main,
    },

    image: {
        width: 200,
        height: 200,
        // borderStyle: 'solid',
        // borderWidth: 1,
        // borderColor: 'black',
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
        color: 'black',
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
    },
}


// export style sheet
export default styles


// end of file
