// local imports
// import colors from 'styles/colors'
import classes from 'styles/classes'


export default {
    input: {
        ...classes.transitionParameters,
        transitionProperty: 'outline',
        width: '100%',
        textAlign: 'center',
        outlineWidth: 1,
        outlineOffset: -1,
        outlineStyle: 'solid',
        outlineColor: 'black',
        backgroundColor: '#333435',
        color: '#eee',
        border: 0,
        paddingTop: 5,
        paddingBottom: 5,

        ':focus': {
            outlineColor: 'white',
        },
    },
}
