// local imports
import colors from 'assets/styles/js/colors'
import {largestFontSize, largeFontSize} from 'assets/styles/js/numerics'


export default {
    container: {
        flexGrow: 1,
        minHeight: '50%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        backgroundImage: 'linear-gradient(to bottom, #6A6AE4, #DCACAC)',
        overflow: 'hidden',
    },

    sunImage: {
        position: 'absolute',
        top: '10%',
        left: '5%',
        height: '10%',
    },

    treeImage: {
        position: 'absolute',
        top: '25%',
        left: '67%',
        height: '80%',
    },

    bird: {
        position: 'absolute',
        top: '84%',
        left: '14%',
        height: '11%',
    },

    grassImage: {
        position: 'absolute',
        top: '83%',
        left: 0,
        width: '100%',
    },

    overlay: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },

    title: {
        fontSize: largestFontSize,
        fontWeight: 'bold',
        color: colors.background.main,
    },

    subtitle: {
        paddingTop: 20,
        fontSize: largeFontSize,
        color: colors.background.main,
    },
}