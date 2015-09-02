/**
 * Style sheet for Root component.
 */

/* local imports */
import colors from '../../../styles/colors'


// define style sheet
let styles = {
    outer_container: {
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: 20,
        backgroundColor: colors.primary.lightest,
    },

    inner_container: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
    },

    paper: {
        backgroundColor: colors.grey.lighter,
    },

    content: {
        flexGrow: 1,
        padding: 15,
    },
}


// export style sheet
export default styles


// end of file
