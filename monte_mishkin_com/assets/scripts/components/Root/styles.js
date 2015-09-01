/**
 * Style sheet for Root component.
 */

/* local imports */
import colors from '../../../styles/colors'


// define style sheet
let styles = {
    container: {
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
    },

    header: {
        color: colors.grey.main,
        backgroundColor: colors.primary.main,
    },

    content: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        backgroundColor: colors.primary.lightest,
    },

    footer: {
        color: colors.grey.main,
        backgroundColor: colors.primary.lighter,
    },
}


// export style sheet
export default styles


// end of file
