// local imports
import classes from 'styles/classes'
// import colors from 'styles/colors'


export default {
    container: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    list: {
        flexGrow: 1,
        padding: 0,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        listStyleType: 'none',
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 10,
        marginRight: 10,
    },

    listItem: {
        padding: 10,
    },

    link: {
        ...classes.linkHoverable,
        ...classes.darkFontColor,
    },

    figure: {
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    icon: {
        height: 32,
    },

    caption: {
        fontStyle: 'normal',
    },
}
