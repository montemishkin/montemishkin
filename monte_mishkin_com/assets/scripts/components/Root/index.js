/* common react imports */
import React from 'react/addons'
import {RouteHandler} from 'react-router'
/* local imports */
import styles from './styles'
import Nav from '../Nav'


/**
 * Root level component.
 * @class
 */
class Root extends React.Component {
    render() {
        return (<div style={styles.container}>
            <Nav />
            <div style={styles.content}>
                <RouteHandler />
                <div style={styles.footer}>
                    copyright 2015
                </div>
            </div>
        </div>)
    }
}


// export component
export default Root


// end of file
