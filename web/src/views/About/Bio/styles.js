// local imports
import classes from 'assets/styles/js/classes'
import colors from 'assets/styles/js/colors'
import {
    contentWidth,
    contentMaxWidth,
    contentVerticalPadding,
    largerFontSize,
} from 'assets/styles/js/numerics'


export default {
    container: {
        // padding: `${contentVerticalPadding}px 0`,

        // TODO: put these stylings on the sections' inner content
        //       you should probably also do this for items in WideList

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px 0',
    },


    section: {
        padding: '40px 0',
        width: contentWidth,
        maxWidth: contentMaxWidth,
    },


    sectionTitle: {
        fontSize: largerFontSize,
        padding: '15px 0',
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderBottomWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
    },


    p: {
        padding: '20px 0',
    },


    list: {
        listStyleType: 'unset',
        paddingLeft: 40,
    },


    listItem: {},


    logoList: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
    },


    logoListItem: {
        flexGrow: 1,
        minWidth: 100,
        maxWidth: '20%',
        display: 'flex',
        justifyContent: 'center',

        ...classes.transitionParameters,
        transitionProperty: 'border-color',
        borderColor: colors.interactive.alpha(0).css(),
        borderWidth: 1,
        borderStyle: 'solid',

        ':hover': {
            borderColor: colors.interactive.alpha(1).css(),
        },

        ':focus': {
            borderColor: colors.interactive.alpha(1).css(),
        },
    },


    logoLink: {
        padding: 20,
    },


    logo: {
        width: '100%',
    },


    link: {
        ...classes.linkHoverable,
        color: colors.text.brighten(2).css(),
    },
}
