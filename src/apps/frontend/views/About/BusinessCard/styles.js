// local imports
import classes from 'styles/classes'
import colors from 'styles/colors'


export default {
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
        borderColor: colors.grey.darkerBg,
        paddingBottom: 20,
    },

    image: {
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        width: 200,
        height: 200,
    },

    notImage: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        flexGrow: 1,
    },

    name: {
        ...classes.largerFontSize,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
    },

    address: {
    },

    addressList: {
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

    addressListItem: {
        padding: 10,
    },

    link: {
        ...classes.linkHoverable,
        ...classes.darkFontColor,
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


// end of file
