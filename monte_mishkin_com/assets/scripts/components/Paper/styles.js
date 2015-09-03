/**
 * Style sheet for Paper component.
 */

/* local imports */
import colors from '../../../styles/colors'


// define style sheet
let styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        paddingBottom: 20,
    },

    title: {
        textAlign: 'center',
        margin: 0,
        padding: 20,
    },

    content_wrapper: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        borderStyle: 'solid',
        borderTopWidth: 3,
        borderBottomWidth: 3,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderColor: colors.grey.darkest,
        backgroundColor: colors.grey.lightest,
    },

    content: {
        width: '90%',
    },
}


// export style sheet
export default styles


// end of file
