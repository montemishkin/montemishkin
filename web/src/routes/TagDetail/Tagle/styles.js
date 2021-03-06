// third party imports
import {StyleSheet} from 'aphrodite'
// local imports
import {
    contentWidth,
    contentMaxWidth,
    contentVerticalPadding,
} from 'styles/js/numerics'


export default StyleSheet.create({
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    content: {
        padding: `${contentVerticalPadding}px 0`,
        width: contentWidth,
        maxWidth: contentMaxWidth,
    },
})
