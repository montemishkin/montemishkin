// fix browser land
import 'babel-core/polyfill'
// third party imports imports
import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from 'react-router'
import {Provider} from 'react-redux'
// local imports
import history from './history' // the "./" is important here!
import routes from 'routes'
import {createStore} from 'store'


// Google Analytics
/* eslint-disable */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-68929870-2', 'auto');
/* eslint-enable */


// grab initial application state passed from server
const initialState = window.__INITIAL_STATE__
// instantiate client store with initial application state
const store = createStore(initialState)

// render routed application
ReactDOM.render(
    <Provider store={store}>
        <Router
            routes={routes}
            history={history}
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
