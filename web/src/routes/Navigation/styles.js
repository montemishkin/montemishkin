// local imports
import colors from 'assets/styles/js/colors'
import {mainFontSize} from 'assets/styles/js/numerics'


export default {
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
}
