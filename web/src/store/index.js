// third party imports
import {createStore as create_store, applyMiddleware} from 'redux'
import {addResponsiveHandlers} from 'redux-responsive'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
// local imports
import reducer from './reducer'


// creates a store with middleware
const createStoreWithMiddleware = applyMiddleware(
    thunk,
    createLogger({
        // only log if in non-production environment and `window` available
        predicate: () =>
            process.env.NODE_ENV !== 'production'
            && typeof window !== 'undefined',
        // prevents redux-logger source from trying to access `window` on server
        logger: typeof window !== 'undefined' ? window.console : null,
        // always collapse console groups
        collapsed: () => true,
    }),
)(create_store)


// create a store out of the reducer and some initial data
export function createStore(initialData) {
    // pass the initial data to the store factory
    // also, add the handlers for responsive state updates
    return addResponsiveHandlers(createStoreWithMiddleware(reducer, initialData))
}


// export a store with no initial data
export default createStore()
