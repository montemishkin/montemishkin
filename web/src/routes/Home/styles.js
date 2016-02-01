// third party imports
import chroma from 'chroma-js'
// local imports
import colors from 'assets/styles/js/colors'


export default {
    outerContainer: {
        flexGrow: 1,
        position: 'relative',
    },


    innerContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },


    backBlock: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: colors.secondary.main,
    },


    frontBlock: {
        boxShadow: `0px 0px 5px ${colors.secondary.inverse}`,
        position: 'relative',
        width: '60%',
        height: '30%',
        backgroundColor: colors.primary.inverse,
    },
}
