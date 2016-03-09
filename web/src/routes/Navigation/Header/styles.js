// local imports
import colors from 'styles/js/colors'
import classes from 'styles/js/classes'
import {contentWidth, contentMaxWidth} from 'styles/js/numerics'


const innerContainerBase = {
    display: 'flex',
    flexWrap: 'wrap',
    width: contentWidth,
    maxWidth: contentMaxWidth,
}


export default {
    outerContainer: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: colors.primary.main,
    },


    innerContainerInfinity: {
        ...innerContainerBase,
        justifyContent: 'flex-end',
    },


    innerContainerMedium: {
        ...innerContainerBase,
        justifyContent: 'flex-start',
    },


    link: {
        ...classes.interactive.primary,
        color: colors.primary.inverse,
        display: 'inline-block',
        textDecoration: 'none',
        padding: '15px 20px',
    },
}
