/**
 * Style sheet for BlogPostPreview component.
 */

/* misc third party imports */
import {assign} from 'lodash'
/* local imports */
import colors from '../../../styles/colors'


const span = {
    display: 'flex',
    alignItems: 'center',
}

// define style sheet
let styles = {
    container: {
        borderStyle: 'solid',
        borderColor: 'black',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        padding: 10,
        backgroundColor: colors.primary.lightest,
    },

    link: {
        textDecoration: 'none',
        color: 'black',
    },

    title: assign({}, span, {
        fontSize: 30,
    }),

    creation_date: assign({}, span, {
        // margin: 0,
    }),

    tag_list: assign({}, span, {
        // margin: 0,
    }),

    content: assign({}, span, {
        // margin: 0,
    }),
}


// export style sheet
export default styles


// end of file
