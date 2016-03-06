const spacing1 = 20
const spacing2 = spacing1 * 3 / 4


export default {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },


    tagList: {
        padding: `${spacing2}px ${spacing1}px`,
        display: 'flex',
        justifyContent: 'center',
    },


    date: {
        padding: `0 ${spacing1}px ${spacing2}px ${spacing1}px`,
        display: 'flex',
        justifyContent: 'center',
    },
}
