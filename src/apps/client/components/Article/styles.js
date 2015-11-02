// local imports
import {
    contentWidth,
    contentMaxWidth,
    contentVerticalPadding,
} from 'styles/numerics'


export default {
    contentContainer: {
        display: 'flex',
        justifyContent: 'center',
    },

    content: {
        padding: `${contentVerticalPadding}px 0`,
        width: contentWidth,
        maxWidth: contentMaxWidth,
    },
}
