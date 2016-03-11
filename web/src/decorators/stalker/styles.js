const containerBase = {
    boxSizing: 'border-box',
    position: 'absolute',
}


export function createContainerStyle(ref) {
    if (ref !== null) {
        const parentRect = ref.parentNode.getBoundingClientRect()
        const myRect = ref.getBoundingClientRect()
        const rectHeight = myRect.bottom - myRect.top

        if (rectHeight > parentRect.bottom) {
            return {
                ...containerBase,
                bottom: 0,
            }
        }
        if (parentRect.top < 0) {
            return {
                ...containerBase,
                position: 'fixed',
                top: 0,
            }
        }
    }

    return containerBase
}
