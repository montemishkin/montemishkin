// local imports
import colors from 'styles/js/colors'
import {
    contentWidth,
    contentMaxWidth,
    contentVerticalPadding,
} from 'styles/js/numerics'


export default {
    infoBar: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: contentVerticalPadding / 2,
    },


    tagListLink: {
        color: colors.background.interactive,
        textDecoration: 'none',

        ':hover': {
            textDecoration: 'underline',
        },

        ':focus': {
            textDecoration: 'underline',
        },
    },


    contentContainer: {
        display: 'flex',
        justifyContent: 'center',
    },


    content: {
        padding: `${contentVerticalPadding}px 0`,
        width: contentWidth,
        maxWidth: contentMaxWidth,
    },


    markdown: {
        paddingBottom: contentVerticalPadding,
    },
}
