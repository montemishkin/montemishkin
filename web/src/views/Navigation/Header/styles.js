// third party imports
import chroma from 'chroma-js'
// local imports
import colors from 'assets/styles/js/colors'
import classes from 'assets/styles/js/classes'
import {largeFontSize} from 'assets/styles/js/numerics'


const spacing = 25


export default {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: `0 ${spacing}px`,
        backgroundColor: colors.primary.main,
        borderWidth: '0 0 1px 0',
        borderStyle: 'solid',
        borderColor: colors.primary.inverse,
    },

    logoLink: {
        display: 'inline-block',
        padding: `${spacing / 2}px ${spacing}px`,
    },

    logo: {
        height: 2 * spacing,
    },

    logoProps: {
        hatTopFill: chroma(colors.background.inverse).brighten().css(),
        hatRimFill: chroma(colors.background.inverse).brighten().css(),
        bodyFill: colors.primary.inverse,
        wingFill: colors.primary.inverse,
        noseFill: colors.primary.inverse,
        eyeFill: colors.background.inverse,
        bodyStroke: colors.background.inverse,
        eyeStroke: colors.background.inverse,
        noseStroke: colors.background.inverse,
        wingStroke: colors.background.inverse,
        leftLegStroke: colors.background.inverse,
        leftFootStroke: colors.background.inverse,
        rightLegStroke: colors.background.inverse,
        rightFootStroke: colors.background.inverse,
        hatRimStroke: colors.background.inverse,
        hatTopStroke: colors.background.inverse,
    },

    list: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },

    link: {
        ...classes.interactive.primary,
        fontSize: largeFontSize,
        color: colors.primary.inverse,
        display: 'inline-block',
        padding: spacing,
    },
}
