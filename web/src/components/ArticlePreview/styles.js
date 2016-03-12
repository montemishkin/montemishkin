// third party imports
import {StyleSheet} from 'aphrodite'


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
    },


    date: {
        padding: `0 ${spacing1}px ${spacing2}px ${spacing1}px`,
        display: 'flex',
        justifyContent: 'center',
    },
})
