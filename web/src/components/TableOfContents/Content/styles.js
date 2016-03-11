// local imports
import colors from 'styles/js/colors'


const containerBase = {
    margin: '10px 0 0 10px',
}


export function createListItemStyle(depth) {
    return {
        margin: `5px 0 5px ${depth * 10}px`,
        listStyleType: ['square', 'disc', 'circle'][depth % 3],
    }
}


export default {
    list: {
        ...containerBase,
        listStylePosition: 'inside',
    },


    message: {
        ...containerBase,
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
}
