// local imports
import classes from 'styles/classes'
import colors from 'styles/colors'
import {contentWidth, contentMaxWidth} from 'styles/numerics'


export default {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: contentWidth,
        maxWidth: contentMaxWidth,
    },

    infoBar: {
        padding: '7px 0',
    },

    titleLink: {
        ...classes.linkHoverable,
        color: colors.text.css(),
    },

    title: {
        ...classes.largerFontSize,
        textAlign: 'center',
        paddingBottom: 10,
    },

    subtitle: {
        ...classes.mainFontSize,
        textAlign: 'center',
    },

    content: {
        ...classes.linkHoverable,
        color: colors.text.brighten().css(),
        textAlign: 'center',
        maxWidth: '90%',
    },
}
