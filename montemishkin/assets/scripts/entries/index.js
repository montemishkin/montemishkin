// common react imports
import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
// local imports
import routes from '../routes'


/* eslint-disable no-unused-vars */
// normalize css
import normalize from 'normalize.css'
// apply global styling
import style from '../../styles/main.css'
// allow for code highlighting
import highlight from '../../styles/highlight.css'
/* eslint-enable */


// render the router directly to body
ReactDOM.render(
    <Router routes={routes} history={createBrowserHistory()} />,
    document.getElementById('app')
)


// end of file
