// third party imports
import React, {Component} from 'react'
import radium from 'radium'
import {RoutingContext} from 'react-router'
import {Provider} from 'react-redux'


class App extends Component {
    render() {
        const {store, renderProps, ...unusedProps} = this.props

        return (
            <Provider {...unusedProps} store={store}>
                <RoutingContext {...renderProps} />
            </Provider>
        )
    }
}


export default radium(App)
