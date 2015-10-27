// local imports
import classes from 'styles/classes'
// import colors from 'styles/colors'


const padding = 20
const containerBase = {
    ...classes.lightFontColor,
    ...classes.smallFontSize,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#333435',
}
const listBase = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
}
const copyrightBase = {
    padding: 20,
}


export default {
    containerMedium: {
        ...containerBase,
        flexDirection: 'column',
    },

    containerInfinity: {
        ...containerBase,
        justifyContent: 'center',
    },

    listInfinity: {
        ...listBase,
        position: 'absolute',
        left: padding,
    },

    listMedium: {
        ...listBase,
    },

    navLink: {
        ...classes.linkHoverable,
        ...classes.lighterFontColor,
        display: 'inline-block',
        padding: padding,
    },

    logoLink: {
        display: 'inline-block',
        paddingTop: padding / 2,
        paddingBottom: padding / 2,
        paddingLeft: padding,
        paddingRight: padding,
    },

    logo: {
        height: 2 * padding,
    },

    copyrightInfinity: {
        ...copyrightBase,
        position: 'absolute',
        right: padding,
    },

    copyrightMedium: {
        ...copyrightBase,
    },

    emailLink: {
        ...classes.linkHoverable,
        ...classes.lighterFontColor,
        display: 'inline-block',
    },
}
