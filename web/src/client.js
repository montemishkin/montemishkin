// fix browser land
import 'babel-polyfill'
// third party imports imports
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, match, browserHistory as history} from 'react-router'
import {Provider} from 'react-redux'
import FontFaceObserver from 'fontfaceobserver'
import {StyleSheet} from 'aphrodite'
// local imports
import routes from 'routes'
import {createStore} from 'store'
import settings from 'config/settings'


// apply global styles (order is important here!)
import 'normalize.css'
import 'styles/css/main.css'
// these aren't needed globally but are too small to justify their own
// style tags and loading them here prevents jank / ugly while waiting for
// those style tags to get injected
import 'styles/css/spinner.css'
import 'styles/css/markdown.css'


// Google Analytics
// see: https://developers.google.com/analytics/devguides/collection/analyticsjs/
/* eslint-disable */
window.ga = window.ga || function () {
    (ga.q = ga.q || []).push(arguments)
};
ga.l = +new Date;
ga('create', settings.gaPropertyId, 'auto');
/* eslint-enable */


// see: https://github.com/bramstein/fontfaceobserver#how-to-use
let hasLoadedOpenSans400 = false
let hasLoadedOpenSans700 = false
const openSansClassName = 'open-sans-font-face-loaded'
const openSans400Observer = new FontFaceObserver('Open Sans', {weight: 400})
const openSans700Observer = new FontFaceObserver('Open Sans', {weight: 700})

openSans400Observer.check().then(() => {
    hasLoadedOpenSans400 = true
    if (hasLoadedOpenSans700) {
        document.body.classList.add(openSansClassName)
    }
})
openSans700Observer.check().then(() => {
    hasLoadedOpenSans700 = true
    if (hasLoadedOpenSans400) {
        document.body.classList.add(openSansClassName)
    }
})


// grab initial application state passed from server
const initialState = window.__INITIAL_STATE__
// instantiate client store with initial application state
const store = createStore(initialState)

// grab rendered css class names passed from server
const renderedClassNames = window.__RENDERED_CLASS_NAMES__
// rehydrate stylesheet with already rendered css class names
StyleSheet.rehydrate(renderedClassNames)


// window's current url
let href = window.location.href


// see: https://github.com/reactjs/react-router/blob/master/docs/guides/ServerRendering.md#async-routes
match({routes, history}, (error, redirectLocation, renderProps) => {
    // TODO: should i be handling `error` and `redirectLocation` here?

    ReactDOM.render(
        <Provider store={store}>
            <Router
                {...renderProps}
                onUpdate={() => {
                    // if url has changed
                    if (window.location.href !== href) {
                        href = window.location.href
                        // see: https://github.com/rackt/react-router/issues/2144#issuecomment-144462974
                        // scroll to top
                        window.scrollTo(0, 0)
                    }
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
