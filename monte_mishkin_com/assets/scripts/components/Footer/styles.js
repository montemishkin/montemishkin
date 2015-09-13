/**
 * Style sheet for Footer component.
 */

/* local imports */
import colors from '../../../styles/colors'
import numerics from '../../../styles/numerics'


// styling common to all `container` styles
const container_base = {
    margin: '0 auto',
    maxWidth: numerics.max_page_width,
    width: '90%',
    display: 'flex',
    fontSize: 12,
    color: colors.grey.lighter_font,
}

// styling common to all `left` styles
const left_base = {
    display: 'flex',
    flexWrap: 'wrap',
}

// styling common to all `right` styles
const right_base = {
}

// styling common to all `link styles`
const link_base = {
    color: colors.grey.link,
    textDecoration: 'none',
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
