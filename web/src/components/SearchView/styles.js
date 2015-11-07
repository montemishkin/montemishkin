// local imports
import classes from 'styles/classes'
import colors from 'styles/colors'
import {
    contentWidth,
    contentMaxWidth,
    contentVerticalPadding,
} from 'styles/numerics'


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
        padding: '5px 0',

        ':focus': {
            outlineColor: colors.uiText.css(),
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
    },
}
