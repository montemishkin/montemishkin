// third party imports
import React from 'react'
import radium from 'radium'
import {RouterContext} from 'react-router'
import {Provider} from 'react-redux'


function App({store, radiumConfig, renderProps}) {
    return (
        <Provider store={store} radiumConfig={radiumConfig}>
            <RouterContext {...renderProps} />
        </Provider>
    )
}


export default radium(App)
