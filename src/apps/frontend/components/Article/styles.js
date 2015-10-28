// local imports
import colors from 'styles/colors'


export default {
    container: {
    },

    creationDate: {
        color: colors.text.brighten(3).css(),
    },

    contentContainer: {
        display: 'flex',
        justifyContent: 'center',
    },

    content: {
        paddingTop: 100,
        paddingBottom: 100,
        width: '70%',
        maxWidth: 740,
    },
}
