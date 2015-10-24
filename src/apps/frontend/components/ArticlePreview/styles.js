// local imports
import classes from 'styles/classes'


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
        ...classes.lighterFontColor,
    },

    titleLink: {
        ...classes.linkHoverable,
        ...classes.darkerFontColor,
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
    },

    content: {
        ...classes.linkHoverable,
        ...classes.mainFontColor,
        textAlign: 'center',
        maxWidth: '90%',
    },
}
