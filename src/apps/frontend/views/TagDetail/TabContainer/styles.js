// local imports
import classes from 'styles/classes'


// base styling for tab titles
const tabTitleBase = {
    display: 'inline-block',
    textAlign: 'center',
    width: '100%',
    padding: 20,
    cursor: 'pointer',
    ...classes.linkHoverable,
}


export default {
    container: {},


    tabList: {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
    },


    tabListItem: {
        flexGrow: 1,
        display: 'flex',
    },


    tabTitle: {
        ...tabTitleBase,
    },


    tabTitleActive: {
        ...tabTitleBase,
        backgroundColor: '#999',
    },


    content: {},
}
