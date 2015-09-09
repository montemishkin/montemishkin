/*
 * Style sheet for Nav component.
 */

/* misc third party imports */
import {assign} from 'lodash'
/* local imports */
import colors from '../../../styles/colors'


// base styling for both active and inactive links
const link_base = {
    padding: 10,
    textDecoration: 'none',
}

// base styling for all `container` styles
const container_base = {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: colors.secondary.darkest,
}


// define style sheet
let styles = {
    container_medium: assign({}, container_base, {
    }),

    container_infinity: assign({}, container_base, {
        borderStyle: 'solid',
        borderColor: 'black',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
    }),

    link: assign({}, link_base, {
        padding: 10,
        color: colors.grey.lightest,

        ':hover': {
            color: colors.grey.main,
        },
    }),

    active_link: assign({}, link_base, {
        color: colors.grey.darkest,
    }),
}


// export style sheet
export default styles


// end of file
