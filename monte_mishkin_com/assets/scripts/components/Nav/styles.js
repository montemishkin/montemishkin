/*
 * Style sheet for Nav component.
 */

/* misc third party imports */
import {assign} from 'lodash'


// base styling for both active and inactive links
const base_link = {
    padding: 10,
    textDecoration: 'none',
}


// define style sheet
let styles = {
    container: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexWrap: 'wrap',
        backgroundColor: '#232323',
    },

    link: assign({}, base_link, {
        padding: 10,
        color: 'grey',

        ':hover': {
            color: 'red',
        },
    }),

    active_link: assign({}, base_link, {
        color: 'green',
    }),
}


// export style sheet
export default styles


// end of file
