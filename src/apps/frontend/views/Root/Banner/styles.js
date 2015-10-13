// local imports
import classes from 'styles/classes'


// base styling common to all `header` styles
const headerBase = {
}
// base styling common to all `subheader` styles
const subheaderBase = {
    ...classes.largeFontSize,
    ...classes.lighterFontColor,
}


export default {
    container: {
        ...classes.rootChildContainer,
    },

    headerMedium: {
        ...headerBase,
        display: 'flex',
        justifyContent: 'center',
    },

    headerInfinity: {
        ...headerBase,
    },

    subheaderMedium: {
        ...subheaderBase,
        display: 'flex',
        justifyContent: 'center',
    },

    subheaderInfinity: {
        ...subheaderBase,
    },

    link: {
        ...classes.largestFontSize,
        ...classes.mainFontColor,
        ...classes.linkBase,
    },
}


// end of file
