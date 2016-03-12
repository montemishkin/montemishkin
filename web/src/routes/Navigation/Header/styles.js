// third party imports
import {StyleSheet} from 'aphrodite'
// local imports
import colors from 'styles/js/colors'
import classes from 'styles/js/classes'
import {contentWidth, contentMaxWidth} from 'styles/js/numerics'
import mediaQueries from 'styles/js/mediaQueries'


export default StyleSheet.create({
    outerContainer: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: colors.primary.main,
    },


    innerContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        width: contentWidth,
        maxWidth: contentMaxWidth,

        [mediaQueries.medium.ge]: {
            justifyContent: 'flex-end',
        },
    },


    link: {
        ...classes.interactive.primary,
        color: colors.primary.inverse,
        display: 'inline-block',
        textDecoration: 'none',
        padding: '15px 20px',
    },
})
