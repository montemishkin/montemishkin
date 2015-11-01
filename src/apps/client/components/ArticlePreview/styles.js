// local imports
import classes from 'styles/classes'
import colors from 'styles/colors'


export default {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '70%',
        maxWidth: 740,
    },

    infoBar: {
        paddingTop: 7,
        paddingBottom: 7,
    },

    creationDate: {
        color: colors.text.brighten(3).css(),
    },

    titleLink: {
        ...classes.linkHoverable,
        color: colors.text.css(),
    },

    title: {
        ...classes.largerFontSize,
        textAlign: 'center',
        paddingBottom: 10,
        margin: 0,
    },

    subtitle: {
        ...classes.mainFontSize,
        margin: 0,
        textAlign: 'center',
    },

    content: {
        ...classes.linkHoverable,
        color: colors.text.brighten().css(),
        textAlign: 'center',
        maxWidth: '90%',
    },
}
