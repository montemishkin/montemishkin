/**
 * Style sheet for Root component.
 */

/* misc third party imports */
import {assign} from 'lodash'
/* local imports */
import colors from '../../../styles/colors'


// common styling for all `inner_container` styles
const inner_container_base = {
    display: 'flex',
    flexDirection: 'column',
}

// common styling for all `content` styles
const content_base = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: colors.grey.lighter,
}


// define style sheet
let styles = {
    outer_container: {
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: colors.primary.main,
    },

    inner_container_medium: assign({}, inner_container_base, {
    }),

    inner_container_large: assign({}, inner_container_base, {
        width: '96%',
    }),

    inner_container_infinity: assign({}, inner_container_base, {
        width: '90%',
    }),

    content_medium: assign({}, content_base, {
    }),

    content_infinity: assign({}, content_base, {
        borderStyle: 'solid',
        borderColor: 'black',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 0,
        borderBottomWidth: 1,
    }),
}


// export style sheet
export default styles


// end of file
