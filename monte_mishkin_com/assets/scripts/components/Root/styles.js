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
        backgroundColor: 'white',
        fontFamily: 'Lato',
        color: colors.grey.fontish,
    },

    content: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: '5%',
        paddingRight: '5%',
        backgroundColor: colors.grey.bg,
    },
}


// export style sheet
export default styles


// end of file
