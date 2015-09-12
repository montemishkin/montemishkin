/**
 * Style sheet for Sage component.
 */

/* local imports */
import colors from '../../../styles/colors'


// define style sheet
let styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
    },

    canvas: {
        width: '80%',
        // height must be set dynamically based on width

        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: colors.grey.darker_bg,
    },
}


// export style sheet
export default styles


// end of file
