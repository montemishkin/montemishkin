// local imports
import colors from 'assets/styles/js/colors'
import classes from 'assets/styles/js/classes'
import {largerFontSize} from 'assets/styles/js/numerics'


const spacing = 20
const linkBase = {
    ...classes.interactive.primary,
    transitionProperty: classes.interactive.primary.transitionProperty + ', padding',
    position: 'relative',
    display: 'inline-block',
    color: colors.primary.inverse,
    fontSize: largerFontSize,
}


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
        width: 200,
        height: 200,
    },


    linkMedium: {
        ...linkBase,
        padding: spacing,
    },


    linkInfinity: {
        ...linkBase,
        padding: `${spacing}px ${spacing * 2}px`,
    },
}
