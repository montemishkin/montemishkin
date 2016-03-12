// third party imports
import {StyleSheet} from 'aphrodite'
// local imports
import {
    contentWidth,
    contentMaxWidth,
    contentVerticalPadding,
} from 'styles/js/numerics'


export default StyleSheet.create({
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
})
