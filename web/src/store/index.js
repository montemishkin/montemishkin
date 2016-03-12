// third party imports
import {createStore as create_store, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
// local imports
import reducer from './reducer'
import settings from 'config/settings'


const middlewares = [thunk]

if (settings.debug && typeof window !== 'undefined') {
    middlewares.push(createLogger({
        // always collapse console groups
        collapsed: () => true,
    }))
}


export function createStore(initialData) {
    return create_store(
        reducer,
        initialData,
        applyMiddleware(...middlewares)
    )
}
