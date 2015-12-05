// local imports
import {
    largeFontSize,
    largestFontSize,
} from 'assets/styles/js/numerics'


const lineHeight = 1.6
const spacing = 30


export default {
    container: {
        fontSize: largeFontSize,
    },


    title: {
        fontSize: largestFontSize,
        padding: '15px 0',
        borderBottom: '1px solid #ccc',
    },


    content: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
    },


    text: {
        lineHeight,
        textAlign: 'center',
        padding: spacing,
        width: 350,
    },


    icon: {
        padding: spacing,
        width: 150,
    },
}
