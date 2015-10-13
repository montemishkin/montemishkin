// local imports
import colors from 'styles/colors'
import classes from 'styles/classes'


// styling for outline transition
const transition = {
    ...classes.transitionParameters,
    transitionProperty: 'outline',
}


/**
 * Stylesheet for SearchBar.
 */
export default {
    input: {
        ...transition,
        width: '100%',
        marginBottom: 10,
        textAlign: 'center',
        outlineWidth: 1,
        outlineOffset: -1,
        outlineStyle: 'solid',
        outlineColor: 'transparent',

        ':focus': {
            outlineColor: colors.primary.lightest,
        },
    },
}


// end of file
