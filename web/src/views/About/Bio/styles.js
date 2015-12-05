// local imports
import colors from 'assets/styles/js/colors'
import {contentVerticalPadding} from 'assets/styles/js/numerics'


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
        // minWidth: 200,
    },


    logoLink: {
        display: 'inline-block',
        margin: '20px 0',
        width: '100%',
    },


    blogDescriptionList: {
        listStyleType: 'disc',
        paddingTop: 20,
        marginLeft: '2em',
        textAlign: 'left',
    },
}
