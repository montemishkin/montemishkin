// local imports
import colors from 'styles/colors'


export default {
    list: {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
    },


    listItem: {
        display: 'flex',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderColor: colors.background.css(),
        borderTopWidth: 1,
        borderBottomWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        paddingBottom: 80,
        paddingTop: 80,
    },
}
