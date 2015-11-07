// local imports
import classes from 'assets/styles/js/classes'
import colors from 'assets/styles/js/colors'


export default {
    container: {
        color: colors.text.css(),
        ...classes.mainFontSize,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
    },
}
