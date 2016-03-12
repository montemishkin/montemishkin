// third party imports
import {StyleSheet} from 'aphrodite'
import chroma from 'chroma-js'
// local imports
import colors from 'styles/js/colors'
import {contentVerticalPadding} from 'styles/js/numerics'
import mediaQueries from 'styles/js/mediaQueries'


const tocWidth = 225


export default StyleSheet.create({
    content: {
        position: 'relative',
    },


    toc: {
        paddingTop: 10,

        [mediaQueries.large.lt]: {
            display: 'none',
        },

        [mediaQueries.large.ge]: {
            width: tocWidth,
        },
    },


    markdown: {
        [mediaQueries.large.ge]: {
            marginLeft: tocWidth + 30,
        },
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
})
