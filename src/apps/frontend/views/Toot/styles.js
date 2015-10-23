const contentBase = {
    maxWidth: 800,
}


export default {
    container: {
        flexGrow: 1,
    },

    contentContainer: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 100,
        paddingBottom: 100,
    },

    contentMedium: {
        ...contentBase,
        width: '90%',
    },

    contentInfinity: {
        ...contentBase,
        width: '80%',
    },
}
