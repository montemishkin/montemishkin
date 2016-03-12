// third party imports
import {StyleSheet} from 'aphrodite'
// local imports
import classes from 'styles/js/classes'
import colors from 'styles/js/colors'


const spacing1 = 20
const spacing2 = spacing1 * 3 / 4


export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },


    tagList: {
        padding: `${spacing2}px ${spacing1}px`,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },


    tagListItem: {
        margin: '0 3px',
        padding: '2px 3px',
    },


    tagListItemLink: {
        ...classes.interactive.background,
        color: colors.background.inverse,
    },


    date: {
        padding: `0 ${spacing1}px ${spacing2}px ${spacing1}px`,
    },
})
