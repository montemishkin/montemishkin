// local imports
import classes from 'assets/styles/js/classes'
import colors from 'assets/styles/js/colors'
import {
    contentWidth,
    contentMaxWidth,
    contentVerticalPadding,
} from 'assets/styles/js/numerics'


export default {
    searchBar: {
        ...classes.transitionParameters,
        transitionProperty: 'outline',
        width: '100%',
        textAlign: 'center',
        outlineWidth: 1,
        outlineOffset: -1,
        outlineStyle: 'solid',
        outlineColor: colors.primary.inverse,
        backgroundColor: colors.primary.main,
        color: colors.primary.inverse,
        border: 0,
        padding: '5px 0',

        ':focus': {
            outlineColor: colors.primary.interactive,
        },
    },


    messageContainer: {
        display: 'flex',
        justifyContent: 'center',
    },


    message: {
        padding: `${contentVerticalPadding}px 0`,
        width: contentWidth,
        maxWidth: contentMaxWidth,
        textAlign: 'center',
    },
}
