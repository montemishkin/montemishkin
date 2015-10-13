// local imports
import colors from 'styles/colors'
import classes from 'styles/classes'


// base styling for both active and inactive links
const linkBase = {
    ...classes.linkHoverable,
    ...classes.darkFontColor,
    padding: 10,
}

// base styling for all `container` styles
const innerContainerBase = {
    ...classes.rootChildContainer,
    display: 'flex',
    flexWrap: 'wrap',
}

// styling for color and background-color transition
const transition = {
    ...classes.transitionParameters,
    transitionProperty: 'color, background-color',
}


export default {
    outerContainer: {
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

    link: {
        ...linkBase,
        ...transition,
    },

    linkActive: {
        ...linkBase,
        ...transition,
        backgroundColor: colors.grey.lighter,
    },
}


// end of file
