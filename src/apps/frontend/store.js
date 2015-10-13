// third party imports
import {createStore as create_store} from 'redux'
import {addResponsiveHandlers} from 'redux-responsive'
// local imports
import reducers from './reducers'


// create a store out of the reducers and some initial data
export function createStore(initialData) {
    // pass the initial data to the store factory
    // also, add the handlers for responsive state updates
    return addResponsiveHandlers(create_store(reducers, initialData))
}


// export a store with no initial data
export default createStore()
