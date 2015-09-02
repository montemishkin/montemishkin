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
        backgroundColor: colors.primary.main,
    },

    link: assign({}, base_link, {
        padding: 10,
        color: colors.secondary.main,

        ':hover': {
            color: colors.secondary.darker,
        },
    }),

    active_link: assign({}, base_link, {
        color: colors.secondary.lighter,
    }),
}


// export style sheet
export default styles


// end of file
