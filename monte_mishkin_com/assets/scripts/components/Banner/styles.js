/**
 * Style sheet for Banner component.
 */

/* local imports */
import colors from '../../../styles/colors'
import numerics from '../../../styles/numerics'


// base styling common to all `header` styles
const header_base = {
}
// base styling common to all `subheader` styles
const subheader_base = {
    fontSize: 14,
    fontWeight: 700,
    color: colors.grey.subheader,
}


// define style sheet
let styles = {
    container: {
    },

    header_medium: {
        ...header_base,
        display: 'flex',
        justifyContent: 'center',
    },

    header_infinity: {
        ...header_base,
        paddingLeft: numerics.root_child_side_padding,
    },

    subheader_medium: {
        ...subheader_base,
        display: 'flex',
        justifyContent: 'center',
    },

    subheader_infinity: {
        ...subheader_base,
        paddingLeft: numerics.root_child_side_padding,
    },

    link: {
        fontSize: 36,
        fontWeight: 400,
        color: colors.grey.header,
        textDecoration: 'none',
    },
}


// export style sheet
export default styles


// end of file
