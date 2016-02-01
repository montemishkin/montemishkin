// third party imports
import {createStore as create_store, applyMiddleware} from 'redux'
import {addResponsiveHandlers} from 'redux-responsive'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
// local imports
import reducer from './reducer'


const middlewares = [thunk]

if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
    middlewares.push(createLogger({
        // always collapse console groups
        collapsed: () => true,
    }))
}


export function createStore(initialData) {
    return addResponsiveHandlers(
        create_store(
            reducer,
            initialData,
            applyMiddleware(...middlewares)
        )
    )
}


// export a store with no initial data
export default createStore()
