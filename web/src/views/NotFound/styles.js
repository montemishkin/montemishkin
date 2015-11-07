// local imports
import colors from 'assets/styles/js/colors'


export default {
    container: {
        display: 'flex',
        flexDirection: 'column',
    },

    banner: {
        backgroundColor: colors.palette.sunburn.css(),
    },

    content: {
        flexGrow: 1,
        backgroundRepeat: 'repeat-x, no-repeat, no-repeat',
        backgroundSize: 'auto 400px, auto 400px, auto',
        backgroundImage: 'url(/static/images/grass.svg), '
            + 'url(/static/images/sun-and-tree.svg), '
            + 'linear-gradient(to bottom, #6A6AE4, #DCACAC)',
        height: 400,
    },
}
