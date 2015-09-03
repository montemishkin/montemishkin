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
        backgroundColor: colors.primary.main,
    },

    inner_container: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
    },

    content: {
        display: 'flex',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderColor: 'black',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 0,
        borderBottomWidth: 1,
        backgroundColor: colors.grey.lighter,
    },
}


// export style sheet
export default styles


// end of file
