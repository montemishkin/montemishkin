// third party imports
import chroma from 'chroma-js'
// local imports
import classes from 'assets/styles/js/classes'
import colors from 'assets/styles/js/colors'


// base styling for tab titles
const tabTitleBase = {
    display: 'inline-block',
    textAlign: 'center',
    width: '100%',
    padding: 20,
    cursor: 'pointer',
    ...classes.interactive.background,
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
        backgroundColor: chroma(colors.background.main).darken().css(),
    },


    tabTitleActive: {
        ...tabTitleBase,
        borderStyle: 'solid',
        borderColor: colors.background.inverse,
        borderWidth: '1px 1px 0 1px',
    },
}
