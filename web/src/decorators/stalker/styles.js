const containerBase = {
    boxSizing: 'border-box',
    position: 'absolute',
}


export function createContainerStyle({scrollY, ref, initialRect}) {
    if (ref !== null) {
        const parentRect = ref.parentNode.getBoundingClientRect()
        const rectHeight = initialRect.bottom - initialRect.top

        if (rectHeight > parentRect.bottom) {
            return {
                ...containerBase,
                bottom: 0,
            }
        }
        if (scrollY > initialRect.top) {
            return {
                ...containerBase,
                position: 'fixed',
                top: 0,
            }
        }
    }

    return containerBase
}
