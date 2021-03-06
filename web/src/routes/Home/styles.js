// third party imports
import {StyleSheet} from 'aphrodite'
// local imports
import colors from 'styles/js/colors'
import classes from 'styles/js/classes'
import {largerFontSize} from 'styles/js/numerics'
import mediaQueries from 'styles/js/mediaQueries'


const spacing = 20


export default StyleSheet.create({
    outerContainer: {
        flexGrow: 1,
        position: 'relative',
        minHeight: 500,
    },


    innerContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },


    backBlock: {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: colors.secondary.main,
    },


    frontBlock: {
        position: 'relative',
        width: '60%',
        height: '70%',
        minWidth: 250,
        backgroundColor: colors.primary.main,
    },


    logo: {
        position: 'relative',
        padding: spacing,
        width: 200,
        height: 200,
    },


    link: {
        ...classes.interactive.primary,
        transitionProperty: classes.interactive.primary.transitionProperty + ', padding',
        position: 'relative',
        display: 'inline-block',
        color: colors.primary.inverse,
        fontSize: largerFontSize,

        [mediaQueries.medium.lt]: {
            padding: spacing,
        },

        [mediaQueries.medium.ge]: {
            padding: `${spacing}px ${spacing * 2}px`,
        },
    },
})
