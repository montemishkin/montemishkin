/**
 * Style sheet for BusinessCard component.
 */

/* local imports */
import classes from '../../../styles/classes'
import colors from '../../../styles/colors'


// define style sheet
let styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch',
        flexWrap: 'wrap',
        marginBottom: 20,
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        borderColor: colors.grey.darker_bg,
        paddingBottom: 20,
    },

    image: {
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        width: 200,
        height: 200,
    },

    not_image: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        flexGrow: 1,
    },

    name: {
        ...classes.larger_font_size,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
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
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 10,
        marginRight: 10,
    },

    address_list_item: {
        padding: 10,
    },

    link: {
        ...classes.link_hoverable,
        ...classes.dark_font_color,
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

    caption: {
        fontStyle: 'normal',
    },
}


// export style sheet
export default styles


// end of file
