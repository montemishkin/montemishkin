// third party imports
import {StyleSheet} from 'aphrodite'
// local imports
import classes from 'styles/js/classes'
import colors from 'styles/js/colors'


export default StyleSheet.create({
    list: {
        listStyleType: 'none',
        padding: '0 3px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },


    listItem: {
        margin: '0 3px',
        padding: '2px 3px',
    },


    link: {
        ...classes.interactive.background,
        color: colors.background.inverse,
    },
})
