/**
 * Style sheet for AboutView component.
 */

/* local imports */
import classes from '../../../styles/classes'


// base styling common to all blockquote styles
const blockquote_base = {
    ...classes.large_font_size,
    width: '50%',
    fontStyle: 'italic',
    fontFamily: 'serif',
    quotes: '"\u201C""\u201D""\u2018""\u2019"',
}


// define style sheet
let styles = {
    container: {
        ...classes.page_content_container,
    },

    blockquote_medium: {
        ...blockquote_base,
        margin: '0 auto',
        textAlign: 'center',
    },

    blockquote_infinity: {
        ...blockquote_base,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: '40%',
        textAlign: 'right',
    },
}


// export style sheet
export default styles


// end of file
