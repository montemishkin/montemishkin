// local imports
import colors from 'assets/styles/js/colors'


export default {
    list: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
    },


    listItem: {
        display: 'flex',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderColor: colors.background.inverse,
        borderWidth: '1px 0 0 0',
        padding: '80px 0',
    },


    listItemFirst: {
        borderWidth: 0,
    },
}
