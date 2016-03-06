// local imports
import {contentWidth, contentMaxWidth} from 'assets/styles/js/numerics'


const spacing = 80
const listItemBase = {
    width: contentWidth,
    maxWidth: contentMaxWidth,
}


export default {
    list: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },


    listItem: {
        ...listItemBase,
        padding: `0 0 ${spacing}px 0`,
    },


    listItemFirst: {
        ...listItemBase,
        padding: `${spacing}px 0`,
    },
}
