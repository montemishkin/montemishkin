// local imports
import classes from 'styles/classes'
import colors from 'styles/colors'


export default {
    searchBar: {
        ...classes.transitionParameters,
        transitionProperty: 'outline',
        width: '100%',
        textAlign: 'center',
        outlineWidth: 1,
        outlineOffset: -1,
        outlineStyle: 'solid',
        outlineColor: 'black',
        backgroundColor: colors.ui.css(),
        color: colors.uiText.css(),
        border: 0,
        paddingTop: 5,
        paddingBottom: 5,

        ':focus': {
            outlineColor: colors.uiText.css(),
        },
    },


    messageContainer: {
        display: 'flex',
        justifyContent: 'center',
    },


    message: {
        paddingTop: 100,
        paddingBottom: 100,
        width: '70%',
        maxWidth: 740,
    },
}
