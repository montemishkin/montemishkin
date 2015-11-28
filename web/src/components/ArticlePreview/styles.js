// local imports
import classes from 'assets/styles/js/classes'
import colors from 'assets/styles/js/colors'
import {
    contentWidth,
    contentMaxWidth,
    largerFontSize,
    largeFontSize,
} from 'assets/styles/js/numerics'


const transition = {
    ...classes.transitionParameters,
    transitionProperty: 'color',
}
const titleBase = {
    ...transition,
    fontSize: largerFontSize,
    paddingBottom: 10,
}
const subtitleBase = {
    ...transition,
    fontSize: largeFontSize,
}


export default {
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: contentWidth,
        maxWidth: contentMaxWidth,
    },

    infoBar: {
        padding: '7px 0',
    },

    link: {
        textDecoration: 'none',
    },

    title: {
        ...titleBase,
        color: colors.text.css(),
    },

    titleHovered: {
        ...titleBase,
        color: colors.interactive.css(),
    },

    subtitle: {
        ...subtitleBase,
        color: colors.text.brighten(2).css(),
    },

    subtitleHovered: {
        ...subtitleBase,
        color: colors.interactive.css(),
    },
}
