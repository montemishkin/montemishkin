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
    paddingTop: 3,
    paddingBottom: 3,
}

// define style sheet
let styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
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

    title_and_date: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    title: assign({}, span, {
        fontSize: 30,

        ':hover': {
            // color: '#555555',
            color: 'white',
        },
    }),

    creation_date: assign({}, span, {
        // margin: 0,
    }),

    tag_list: assign({}, span, {
        marginTop: 3,
        marginBottom: 5,
    }),

    content: assign({}, span, {
        paddingLeft: '5%',
    }),
}


// export style sheet
export default styles


// end of file
