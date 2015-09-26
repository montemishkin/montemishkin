/**
 * Sitewide "CSS" classes.
 */

/* local imports */
import colors from './colors'
import numerics from './numerics'


/* Font Size Classes */

export const largest_font_size = {
    fontSize: 36,
    fontWeight: 400,
}

export const larger_font_size = {
    fontSize: 30,
}

export const large_font_size = {
    // fontSize: 14,
    // fontWeight: 700,
    fontSize: 24,
}

export const main_font_size = {
    fontSize: 16,
}

export const small_font_size = {
    fontSize: 13,
}


/* Font Color Classes */

export const darker_font_color = {
    color: colors.grey.link,
}

export const dark_font_color = {
    color: colors.grey.fontish,
}

export const main_font_color = {
    color: colors.grey.header,
}

export const light_font_color = {
    color: colors.grey.lighter_font,
}

export const lighter_font_color = {
    color: colors.grey.subheader,
}


/* Misc Classes */

// styling for containers of views that act as the `RouteHandler` in `Root`
export const page_content_container = {
    maxWidth: numerics.max_page_width,
    margin: '0 auto',
}

// styling for containers of components that are direct children to `Root`
export const root_child_container = {
    ...page_content_container,
    width: '90%',
}

// parameters (everything except transitionProperty) for css transitions
export const transition_parameters = {
    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease-in-out',
}

// base styling common to all link styles
export const link_base = {
    textDecoration: 'none',
}

// styling for links that change color on hover
export const link_hoverable = {
    ...link_base,
    ...transition_parameters,
    // display: 'flex',
    transitionProperty: 'color',

    ':hover': {
        ...transition_parameters,
        transitionProperty: 'color',
        color: colors.grey.link_hover,
    },
}

// export const header


/* export object with all classes as default */

export default {
    largest_font_size,
    larger_font_size,
    large_font_size,
    main_font_size,
    small_font_size,

    darker_font_color,
    dark_font_color,
    main_font_color,
    light_font_color,
    lighter_font_color,

    page_content_container,
    root_child_container,
    transition_parameters,
    link_base,
    link_hoverable,
}


// end of file
