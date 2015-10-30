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
        borderWidth: '1px 0',
        padding: '80px 0',
    },
}
