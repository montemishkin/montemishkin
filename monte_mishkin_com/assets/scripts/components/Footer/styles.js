/**
 * Style sheet for Footer component.
 */

/* local imports */
import colors from '../../../styles/colors'


// define style sheet
let styles = {
    container: {
        paddingTop: 15,
        fontSize: 12,
        color: colors.grey.main,
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },

    left: {
        display: 'flex',
        flexBasis: 250,
        justifyContent: 'space-between',
    },

    right: {
    },

    link: {
        color: colors.grey.lightest,
        textDecoration: 'none',
    },
}


// export style sheet
export default styles


// end of file
