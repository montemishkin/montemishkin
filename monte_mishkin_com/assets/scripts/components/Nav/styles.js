/*
 * Style sheet for Nav component.
 */

/* misc third party imports */
import {assign} from 'lodash'
/* local imports */
import colors from '../../../styles/colors'


// base styling for both active and inactive links
const base_link = {
    padding: 10,
    textDecoration: 'none',
}


// define style sheet
let styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: colors.secondary.darkest,
    },

    link: assign({}, base_link, {
        padding: 10,
        color: colors.grey.lightest,

        ':hover': {
            color: colors.grey.main,
        },
    }),

    active_link: assign({}, base_link, {
        color: colors.grey.darkest,
    }),
}


// export style sheet
export default styles


// end of file
