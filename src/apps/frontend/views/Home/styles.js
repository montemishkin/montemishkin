// local imports
import classes from 'styles/classes'
import colors from 'styles/colors'


// base styling for all page sections
const sectionBase = {
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
}
// base styling for all page sections EXCEPT banner AND sage
const textSectionBase = {
    ...sectionBase,
    padding: 100,
}


export default {
    container: {
    },


    banner: {
        ...sectionBase,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'stretch',
        alignItems: 'stretch',
        backgroundColor: colors.grey.darkerBg,
    },


    downArrowContainer: {
        display: 'flex',
        justifyContent: 'center',
    },


    bannerContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
    },


    header: {
        ...classes.largestFontSize,
        textAlign: 'center',
    },


    logo: {
        height: '50%',
        width: 'auto',
    },


    nav: {
        width: '80%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },


    navLink: {
        ...classes.linkHoverable,
        ...classes.largerFontSize,
        ...classes.mainFontColor,
        margin: 30,
        textDecoration: 'none',
    },


    downArrow: {
        height: '6vh',
        cursor: 'pointer',
    },


    sage: {
        ...sectionBase,
    },


    about: {
        ...textSectionBase,
    },


    projects: {
        ...textSectionBase,
    },


    blog: {
        ...textSectionBase,
    },


    conclusion: {
        ...textSectionBase,
    },
}


// end of file
