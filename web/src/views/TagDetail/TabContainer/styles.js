// local imports
import classes from 'assets/styles/js/classes'


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
    tabList: {
        listStyleType: 'none',
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
        // TODO: move to styles/js/colors.js
        backgroundColor: '#999',
    },
}
