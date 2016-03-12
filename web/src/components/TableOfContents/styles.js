// third party imports
import {StyleSheet} from 'aphrodite'
import chroma from 'chroma-js'
// local imports
import colors from 'styles/js/colors'


export default StyleSheet.create({
    container: {
        color: chroma(colors.background.inverse).brighten(0.5).css(),
    },


    title: {
        borderBottom: `solid 1px ${chroma(colors.background.inverse).brighten(3).css()}`,
    },
})
