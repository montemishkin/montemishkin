// fix browser land
import 'babel-core/polyfill'
// third party imports imports
import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from 'react-router'
import {Provider} from 'react-redux'
import createBrowserHistory from 'history/lib/createBrowserHistory'
// local imports
import routes from 'apps/client/routes'
import {createStore} from 'apps/client/store'


// use the browser's native history
const history = createBrowserHistory()

// grab the initial application state passed from the server
const initialState = window.__INITIAL_STATE__
// instantiate client store with initial application state
const store = createStore(initialState)

// render the routed application
ReactDOM.render(
    <Provider store={store}>
        <Router
            routes={routes}
            history={history}
            // see https://github.com/rackt/react-router/issues/2144#issuecomment-144462974
            onUpdate={() => window.scrollTo(0, 0)}
        />
    </Provider>,
    document.getElementById('app')
)
