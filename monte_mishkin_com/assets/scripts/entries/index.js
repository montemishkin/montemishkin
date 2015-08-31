/*
 * Main entry point.
 */

/* common react imports */
import React from 'react/addons'
import Router from 'react-router'
/* local imports */
import routes from '../routes'


// normalize css
/* eslint-disable no-unused-vars */
import normalize from 'normalize.css'
/* eslint-enable */


// run the router
Router.run(
    routes,
    Router.HistoryLocation,
    (Handler) => React.render(<Handler />, document.body)
)


// end of file
