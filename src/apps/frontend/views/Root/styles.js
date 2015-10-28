// local imports
import classes from 'styles/classes'
import colors from 'styles/colors'


export default {
    container: {
        color: colors.text.css(),
        ...classes.mainFontSize,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
    },
}
