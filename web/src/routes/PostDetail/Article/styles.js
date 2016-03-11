// third party imports
import chroma from 'chroma-js'
// local imports
import colors from 'styles/js/colors'
import {contentVerticalPadding} from 'styles/js/numerics'


const tocWidth = 200


export default {
    content: {
        position: 'relative',
    },


    toc: {
        width: tocWidth,
    },


    markdown: {
        marginLeft: tocWidth,
    },


    comments: {
        backgroundColor: chroma(colors.background.main).brighten(0.125).css(),
    },


    infoBar: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: contentVerticalPadding / 2,
    },


    creationDate: {
        padding: 9,
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
}
