// third party imports
import chroma from 'chroma-js'
// local imports
import classes from 'assets/styles/js/classes'
import colors from 'assets/styles/js/colors'
import {
    contentWidth,
    contentMaxWidth,
    contentVerticalPadding,
    largerFontSize,
} from 'assets/styles/js/numerics'


const interactiveColor = chroma(colors.background.interactive)


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
        borderColor: interactiveColor.alpha(0).css(),
        borderWidth: 1,
        borderStyle: 'solid',

        ':hover': {
            borderColor: interactiveColor.alpha(1).css(),
        },

        ':focus': {
            borderColor: interactiveColor.alpha(1).css(),
        },
    },


    logoLink: {
        padding: 20,
    },


    logo: {
        width: '100%',
    },


    link: {
        color: colors.background.interactive,
        textDecoration: 'underline',
    },
}
