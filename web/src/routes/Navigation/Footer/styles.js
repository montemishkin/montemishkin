// third party imports
import {StyleSheet} from 'aphrodite'
import chroma from 'chroma-js'
// local imports
import classes from 'styles/js/classes'
import colors from 'styles/js/colors'
import {contentWidth, contentMaxWidth} from 'styles/js/numerics'
import mediaQueries from 'styles/js/mediaQueries'


const verticalSpacing = 7.5
const horizontalSpacing = verticalSpacing * 8 / 3
const linkBase = {
    ...classes.interactive.primary,
    color: colors.primary.inverse,
    display: 'inline-block',
    textDecoration: 'none',
}


export default StyleSheet.create({
    outerContainer: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: colors.primary.main,
    },


    innerContainer: {
        display: 'flex',
        width: contentWidth,
        maxWidth: contentMaxWidth,
        padding: `${verticalSpacing}px 0`,

        [mediaQueries.medium.lt]: {
            flexDirection: 'column',
            alignItems: 'center',
        },

        [mediaQueries.medium.ge]: {
            justifyContent: 'space-between',
        },
    },


    navLinks: {
    },


    navLink: {
        ...linkBase,
        padding: `${verticalSpacing}px ${horizontalSpacing}px`,
    },


    copyright: {
        color: chroma(colors.primary.inverse).darken().css(),
        padding: `${verticalSpacing}px ${horizontalSpacing}px`,
    },


    emailLink: {
        ...linkBase,
    },
})
