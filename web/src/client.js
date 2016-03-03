// fix browser land
import 'babel-polyfill'
// third party imports imports
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, match, browserHistory as history} from 'react-router'
import {Provider} from 'react-redux'
// local imports
import routes from 'routes'
import {createStore} from 'store'


if (process.env.NODE_ENV === 'production') {
    // Google Analytics
    // see: https://developers.google.com/analytics/devguides/collection/analyticsjs/
    /* eslint-disable */
    window.ga = window.ga || function () {
        (ga.q = ga.q || []).push(arguments)
    };
    ga.l = +new Date;
    ga('create', 'UA-68929870-2', 'auto');
    /* eslint-enable */
} else {
    /* eslint-disable */
    window.ga = window.ga || function () {};
    /* eslint-enable */
}


// grab initial application state passed from server
const initialState = window.__INITIAL_STATE__
// instantiate client store with initial application state
const store = createStore(initialState)


// see: https://github.com/reactjs/react-router/blob/master/docs/guides/ServerRendering.md#async-routes
match({routes, history}, (error, redirectLocation, renderProps) => {
    // TODO: should i be handling `error` and `redirectLocation` here?

    ReactDOM.render(
        <Provider store={store}>
            <Router
                {...renderProps}
                onUpdate={() => {
                    // see: https://github.com/rackt/react-router/issues/2144#issuecomment-144462974
                    // scroll to top on route change
                    window.scrollTo(0, 0)
                    // see: https://developers.google.com/analytics/devguides/collection/analyticsjs/single-page-applications
                    // update google analytics tracker to current route
                    ga('set', 'page', window.location.pathname)
                    // send a pageview hit to google analytics
                    ga('send', 'pageview')
                }}
            />
        </Provider>,
        document.getElementById('app')
    )
})
