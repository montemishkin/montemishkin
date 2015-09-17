/**
 * Convinience decorator to easily make a view listen to the `ResponsiveStore`.
 */

/* common alt imports */
import connectToStores from 'alt/utils/connectToStores'
/* local imports */
import ResponsiveStore from '../stores/ResponsiveStore'


export function responsive(Component) {
    // add the required static methods to the component
    Component.getStores = () => [ResponsiveStore]
    Component.getPropsFromStores = () =>ResponsiveStore.getState()

    // connect component to the alt store and return it
    return connectToStores(Component)
}


// end of file
