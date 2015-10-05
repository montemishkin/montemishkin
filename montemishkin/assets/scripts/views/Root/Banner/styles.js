/**
 * Style sheet for Banner component.
 */

/* local imports */
import classes from 'styles/classes'


// base styling common to all `header` styles
const header_base = {
}
// base styling common to all `subheader` styles
const subheader_base = {
    ...classes.large_font_size,
    ...classes.lighter_font_color,
}


// define style sheet
let styles = {
    container: {
        ...classes.root_child_container,
    },

    header_medium: {
        ...header_base,
        display: 'flex',
        justifyContent: 'center',
    },

    header_infinity: {
        ...header_base,
    },

    subheader_medium: {
        ...subheader_base,
        display: 'flex',
        justifyContent: 'center',
    },

    subheader_infinity: {
        ...subheader_base,
    },

    link: {
        ...classes.largest_font_size,
        ...classes.main_font_color,
        ...classes.link_base,
    },
}


// export style sheet
export default styles


// end of file
