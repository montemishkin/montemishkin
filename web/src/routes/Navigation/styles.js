// third party imports
import {StyleSheet} from 'aphrodite'
// local imports
import colors from 'styles/js/colors'
import {mainFontSize} from 'styles/js/numerics'


export default StyleSheet.create({
    container: {
        color: colors.background.inverse,
        backgroundColor: colors.background.main,
        fontSize: mainFontSize,

        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
    },

    content: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
    },
})
