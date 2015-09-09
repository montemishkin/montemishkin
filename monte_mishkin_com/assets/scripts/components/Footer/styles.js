/**
 * Style sheet for Footer component.
 */

/* misc third party imports */
import {assign} from 'lodash'
/* local imports */
import colors from '../../../styles/colors'


// styling common to all `inner_container` styles
const inner_container_base = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
}

// styling common to all `left` styles
const left_base = {
    flexBasis: 250,
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: 20,
}

// styling common to all `right` styles
const right_base = {
}


// define style sheet
let styles = {
    outer_container: {
        fontSize: 12,
        color: colors.grey.main,
        display: 'flex',
        justifyContent: 'center',
    },

    inner_container_medium: assign({}, inner_container_base, {
        width: '96%',
    }),

    inner_container_infinity: assign({}, inner_container_base, {
        width: '100%',
    }),

    left_medium: assign({}, left_base, {
        paddingTop: 10,
        paddingBottom: 10,
    }),

    left_infinity: assign({}, left_base, {
        paddingTop: 15,
        paddingBottom: 15,
    }),

    right_medium: assign({}, right_base, {
        paddingTop: 10,
        paddingBottom: 10,
    }),

    right_infinity: assign({}, right_base, {
        paddingTop: 15,
        paddingBottom: 15,
    }),

    link: {
        color: colors.grey.lightest,
        textDecoration: 'none',
    },
}


// export style sheet
export default styles


// end of file
