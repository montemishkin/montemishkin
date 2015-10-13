// local imports
import classes from 'styles/classes'


export default {
    list: {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexWrap: 'wrap',
        // justifyContent: 'space-around',
    },

    listItem: {
        padding: 10,
        display: 'flex',
        alignItems: 'center',
    },

    image: {
        height: 15,
        marginRight: 4,
    },

    link: {
        ...classes.linkHoverable,
        ...classes.darkerFontColor,
        display: 'flex',
        alignItems: 'center',
        paddingBottom: 3,
    },
}


// end of file
