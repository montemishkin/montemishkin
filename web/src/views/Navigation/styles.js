// local imports
import colors from 'assets/styles/js/colors'
import {mainFontSize} from 'assets/styles/js/numerics'


export default {
    container: {
        color: colors.text,
        backgroundColor: colors.textInverse,
        fontSize: mainFontSize,

        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        flexGrow: 1,
    },
}
