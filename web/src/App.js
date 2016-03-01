// third party imports
import React from 'react'
import radium from 'radium'
import {RoutingContext} from 'react-router'
import {Provider} from 'react-redux'


function App({store, radiumConfig, renderProps}) {
    return (
        <Provider store={store} radiumConfig={radiumConfig}>
            <RoutingContext {...renderProps} />
        </Provider>
    )
}


export default radium(App)
