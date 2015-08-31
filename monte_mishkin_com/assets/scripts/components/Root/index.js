/*
 * Root level React component.
 */

/* common react imports */
import React from 'react/addons'
import {RouteHandler} from 'react-router'


// define component
class Root extends React.Component {
    // render component
    render() {
        return (<div>
            <h1>Root Component!</h1>
            <RouteHandler />
        </div>)
    }
}


// export component
export default Root


// end of file
