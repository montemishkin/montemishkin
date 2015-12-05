// third party imports
import chroma from 'chroma-js'
// local imports
import classes from 'assets/styles/js/classes'
import colors from 'assets/styles/js/colors'
import {contentVerticalPadding} from 'assets/styles/js/numerics'


const interactiveColor = chroma(colors.background.interactive)


export default {
    container: {
        padding: `${contentVerticalPadding / 2}px 0`,
    },


    section: {
        padding: `${contentVerticalPadding / 2}px 0`,
    },


    link: {
        color: colors.background.interactive,
        textDecoration: 'none',

        ':hover': {
            textDecoration: 'underline',
        },

        ':focus': {
            textDecoration: 'underline',
        },
    },


    logoList: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        padding: '30px',
        flexGrow: 1,
        minWidth: 100,
        maxWidth: 300,
    },


    logoListItem: {
        // flexGrow: 1,
        minWidth: 50,
        // maxWidth: '20%',
        display: 'flex',
        justifyContent: 'center',

        // ...classes.transitionParameters,
        // transitionProperty: 'border-color',
        // borderColor: interactiveColor.alpha(0).css(),
        // borderWidth: 1,
        // borderStyle: 'solid',
        //
        // ':hover': {
        //     borderColor: interactiveColor.alpha(1).css(),
        // },
        //
        // ':focus': {
        //     borderColor: interactiveColor.alpha(1).css(),
        // },
    },


    logoLink: {
        // padding: 20,
    },


    logo: {
        width: '100%',
    },


    blogDescriptionList: {
        listStyleType: 'disc',
        paddingTop: 20,
        marginLeft: '2em',
        textAlign: 'left',
    },
}
