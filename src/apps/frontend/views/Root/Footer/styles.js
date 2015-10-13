// local imports
import classes from 'styles/classes'


// styling common to all `container` styles
const containerBase = {
    ...classes.rootChildContainer,
    ...classes.lightFontColor,
    ...classes.smallFontSize,
    display: 'flex',
    paddingTop: 10,
    paddingBottom: 10,
}

// styling common to all `left` styles
const leftBase = {
    display: 'flex',
    flexWrap: 'wrap',
}

// styling common to all `right` styles
const rightBase = {
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
        alignItems: 'center',
    },

    containerInfinity: {
        ...containerBase,
        justifyContent: 'space-between',
    },

    leftMedium: {
        ...leftBase,
    },

    leftInfinity: {
        ...leftBase,
        flexBasis: 250,
        marginLeft: -10,
    },

    rightMedium: {
        ...rightBase,
        paddingTop: 0,
        paddingBottom: 10,
    },

    rightInfinity: {
        ...rightBase,
        padding: 10,
        marginRight: -10,
    },

    navLink: {
        ...linkBase,
        padding: 10,
    },

    emailLink: {
        ...linkBase,
    },
}


// end of file
