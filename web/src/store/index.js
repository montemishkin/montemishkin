// third party imports
import {createStore as create_store, applyMiddleware, compose} from 'redux'
import {responsiveStoreEnhancer} from 'redux-responsive'
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
    return create_store(
        reducer,
        initialData,
        compose(
            responsiveStoreEnhancer,
            applyMiddleware(...middlewares)
        )
    )
}


// export a store with no initial data
export default createStore()
