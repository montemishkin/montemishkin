/*
 * Main entry point.
 */

/* common react imports */
import React from 'react/addons'
import Router from 'react-router'
/* local imports */
import routes from '../routes'


/* eslint-disable no-unused-vars */
// normalize css
import normalize from 'normalize.css'
// apply global styling
import style from '../../styles/main.css'
// allow for code highlighting
import highlight from '../../styles/highlight.css'
/* eslint-enable */


// run the router
Router.run(
    routes,
    Router.HistoryLocation,
    (Handler) => React.render(<Handler />, document.body)
)


// end of file
