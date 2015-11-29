// local imports
import {
    contentWidth,
    contentMaxWidth,
    contentVerticalPadding,
} from 'assets/styles/js/numerics'


export default {
    infoBar: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

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
