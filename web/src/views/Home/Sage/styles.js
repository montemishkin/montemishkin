// local imports
import colors from 'assets/styles/js/colors'
import classes from 'assets/styles/js/classes'


// styling for transition parameters
const transition = {
    ...classes.transitionParameters,
    transitionProperty: 'opacity',
}


export default {
    overlay: {
        ...transition,
        ...classes.largestFontSize,
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'black',
        backgroundColor: colors.palette.sand.css(),
        opacity: 1,
    },


    fadeOut: {
        opacity: 0,
    },


    canvas: {
        width: '100%',
        height: '100%',
    },
}
