// local imports
import classes from 'assets/styles/js/classes'
import colors from 'assets/styles/js/colors'


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
    banner: {
        ...sectionBase,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'stretch',
        alignItems: 'stretch',
        backgroundColor: colors.palette.skyBlue.css(),
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
        width: '50%',
        maxWidth: 350,
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
        color: colors.text.brighten().css(),
        margin: 30,
        textDecoration: 'none',
    },


    downArrowContainer: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: 15,
    },


    downArrowButton: {
        ...classes.linkHoverable,
        ...classes.largestFontSize,
        backgroundColor: 'transparent',
        border: 0,
        outline: 0,
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
