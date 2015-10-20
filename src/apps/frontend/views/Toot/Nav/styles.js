// local imports
import colors from 'styles/colors'
import classes from 'styles/classes'


// base styling for all `container` styles
const containerBase = {
    display: 'flex',
    flexWrap: 'wrap',
    listStyleType: 'none',
    margin: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: colors.grey.darkerBg,
}


export default {
    containerMedium: {
        ...containerBase,
        justifyContent: 'center',
    },


    containerInfinity: {
        ...containerBase,
        justifyContent: 'flex-end',
        paddingRight: 20,
    },


    link: {
        ...classes.linkHoverable,
        ...classes.darkFontColor,
        padding: 20,
    },
}
