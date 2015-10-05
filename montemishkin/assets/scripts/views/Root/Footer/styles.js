/**
 * Style sheet for Footer component.
 */

/* local imports */
import classes from 'styles/classes'


// styling common to all `container` styles
const container_base = {
    ...classes.root_child_container,
    ...classes.light_font_color,
    ...classes.small_font_size,
    display: 'flex',
    paddingTop: 10,
    paddingBottom: 10,
}

// styling common to all `left` styles
const left_base = {
    display: 'flex',
    flexWrap: 'wrap',
}

// styling common to all `right` styles
const right_base = {
}

// styling common to all `link` styles
const link_base = {
    ...classes.link_hoverable,
    ...classes.darker_font_color,
}


// define style sheet
let styles = {
    container_medium: {
        ...container_base,
        flexDirection: 'column',
        alignItems: 'center',
    },

    container_infinity: {
        ...container_base,
        justifyContent: 'space-between',
    },

    left_medium: {
        ...left_base,
    },

    left_infinity: {
        ...left_base,
        flexBasis: 250,
        marginLeft: -10,
    },

    right_medium: {
        ...right_base,
        paddingTop: 0,
        paddingBottom: 10,
    },

    right_infinity: {
        ...right_base,
        padding: 10,
        marginRight: -10,
    },

    nav_link: {
        ...link_base,
        padding: 10,
    },

    email_link: {
        ...link_base,
    },
}


// export style sheet
export default styles


// end of file
