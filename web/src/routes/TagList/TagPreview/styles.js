// third party imports
import chroma from 'chroma-js'
// local imports
import classes from 'styles/js/classes'
import colors from 'styles/js/colors'
import {largeFontSize, largerFontSize} from 'styles/js/numerics'


export default {
    container: {
        display: 'flex',
        justifyContent: 'center',
    },

    link: {
        ...classes.interactive.background,
        color: colors.background.inverse,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    name: {
        fontSize: largerFontSize,
        textAlign: 'center',
        color: colors.background.inverse,
    },

    description: {
        paddingTop: 10,
        fontSize: largeFontSize,
        textAlign: 'center',
        color: chroma(colors.background.inverse).brighten().css(),
    },
}
