// local imports
import {
    contentWidth,
    contentMaxWidth,
    contentVerticalPadding,
} from 'styles/js/numerics'


export default {
    outerContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },


    innerContainer: {
        padding: `${contentVerticalPadding}px 0`,
        width: contentWidth,
        maxWidth: contentMaxWidth,
    },
}
