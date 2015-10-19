// local imports
import colors from 'styles/colors'
import classes from 'styles/classes'


// styling for color and background-color transition
const transition = {
    ...classes.transitionParameters,
    transitionProperty: 'color, background-color',
}


// base styling for both active and inactive links
const linkBase = {
    ...classes.linkHoverable,
    ...classes.darkFontColor,
    ...transition,
    padding: 10,
}

// base styling for all `container` styles
const innerContainerBase = {
    ...classes.rootChildContainer,
    display: 'flex',
    flexWrap: 'wrap',
    listStyleType: 'none',
}


export default {
    outerContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: colors.grey.darkerBg,
    },

    innerContainerMedium: {
        ...innerContainerBase,
        justifyContent: 'center',
    },

    innerContainerInfinity: {
        ...innerContainerBase,
        justifyContent: 'flex-end',
    },

    listItem: {
    },

    link: {
        ...linkBase,
    },

    linkActive: {
        ...linkBase,
        // backgroundColor: colors.grey.lighter,
    },
}


// end of file
