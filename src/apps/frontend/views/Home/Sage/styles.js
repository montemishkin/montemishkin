// local imports
import colors from 'styles/colors'
import classes from 'styles/classes'


// styling for transition parameters
const transition = {
    ...classes.transitionParameters,
    transitionProperty: 'background-color',
}


export default {
    outerContainer: {
        display: 'flex',
        justifyContent: 'center',
    },


    innerContainer: {
        width: '100%',
    },


    canvasOverlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'black',
        backgroundColor: 'rgb(175, 218, 255)',
        ...classes.largestFontSize,

        transitionDuration: '1.2s',
        transitionProperty: 'opacity',
        transitionTimingFunction: 'ease-in-out',
        opacity: 1,
    },


    fadeOut: {
        transitionDuration: '1.2s',
        transitionProperty: 'opacity',
        transitionTimingFunction: 'ease-in-out',
        opacity: 0,
    },


    canvas: {
        width: '100%',
        height: '100%',
    },


    controls: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingTop: 5,
    },


    button: {
        ...transition,
        borderStyle: 'solid',
        borderWidth: 0,
        borderRadius: 3,
        padding: 10,
        color: colors.grey.white,
        backgroundColor: colors.grey.linkHover,
        cursor: 'pointer',
        textDecoration: 'none',

        ':hover': {
            ...transition,
            backgroundColor: colors.grey.linkHoverDarker,
        },
    },
}


// end of file
