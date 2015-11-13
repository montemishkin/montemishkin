// local imports
import classes from 'assets/styles/js/classes'
import colors from 'assets/styles/js/colors'
import {contentWidth, contentMaxWidth} from 'assets/styles/js/numerics'


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
