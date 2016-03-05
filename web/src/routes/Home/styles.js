// local imports
import colors from 'assets/styles/js/colors'
import classes from 'assets/styles/js/classes'
import {largestFontSize} from 'assets/styles/js/numerics'


const spacing = 20


export default {
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
        maxWidth: 200,
    },


    link: {
        position: 'relative',
        display: 'inline-block',
        ...classes.interactive.primary,
        fontSize: largestFontSize,
        color: colors.primary.inverse,
        padding: spacing,
    },
}
