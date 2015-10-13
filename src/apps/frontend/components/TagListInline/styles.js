// local imports
import classes from 'styles/classes'


export default {
    container: {
        display: 'flex',
        alignItems: 'center',
        ...classes.smallFontSize,
    },

    image: {
        height: 15,
    },

    namesList: {
        listStyleType: 'none',
        margin: 0,
        paddingLeft: 3,
        paddingRight: 3,
        display: 'flex',
        flexWrap: 'wrap',
    },

    namesListItem: {
        marginLeft: 3,
        marginRight: 3,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 3,
        paddingRight: 3,
    },

    link: {
        ...classes.linkHoverable,
        ...classes.darkerFontColor,
    },
}


// end of file
