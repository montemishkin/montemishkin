// local imports
import classes from 'styles/classes'


// styling common to all `container` styles
const containerBase = {
    ...classes.lightFontColor,
    ...classes.smallFontSize,
    display: 'flex',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
}
// styling common to all `copyright` styles
const copyrightBase = {
    paddingLeft: 20,
    paddingRight: 20,
}
// styling common to all `link` styles
const linkBase = {
    ...classes.linkHoverable,
    ...classes.darkerFontColor,
}


export default {
    containerMedium: {
        ...containerBase,
        flexDirection: 'column',
    },

    containerInfinity: {
        ...containerBase,
        justifyContent: 'space-between',
    },

    list: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyleType: 'none',
        margin: 0,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 20,
        paddingRight: 20,
    },

    copyrightMedium: {
        ...copyrightBase,
        paddingTop: 20,
    },

    copyrightInfinity: {
        ...copyrightBase,
    },

    navLink: {
        ...linkBase,
        padding: 20,
    },

    emailLink: {
        ...linkBase,
        paddingRight: 20,
    },
}
