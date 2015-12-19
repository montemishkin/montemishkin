// local imports
import classes from 'assets/styles/js/classes'
import colors from 'assets/styles/js/colors'
import {
    contentWidth,
    contentMaxWidth,
    contentVerticalPadding,
} from 'assets/styles/js/numerics'


export default {
    infoBar: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    tagListLink: {
        ...classes.interactive.secondary,
        color: colors.secondary.inverse,
    },

    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    content: {
        padding: `${contentVerticalPadding}px 0`,
        width: contentWidth,
        maxWidth: contentMaxWidth,
    },

    disqus: {
        paddingBottom: contentVerticalPadding,
        width: contentWidth,
        maxWidth: contentMaxWidth,
    },
}
