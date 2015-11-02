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
        // TODO: move to styles/colors.js
        backgroundColor: '#999',
    },
}
