// local imports
import {
    contentWidth,
    contentMaxWidth,
    contentVerticalPadding,
} from 'assets/styles/js/numerics'


export default {
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
