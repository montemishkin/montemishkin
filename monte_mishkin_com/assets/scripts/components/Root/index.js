/* common react imports */
import React from 'react/addons'
import {RouteHandler} from 'react-router'
/* local imports */
import styles from './styles'
import Banner from '../Banner'
import Nav from '../Nav'
import Footer from '../Footer'


/**
 * Root level component.
 * @class
 */
class Root extends React.Component {
    render() {
        return (<div style={styles.outer_container}>
            <div style={styles.inner_container}>
                <Banner />
                <div style={styles.paper}>
                    <Nav />
                    <div style={styles.content}>
                        <RouteHandler />
                    </div>
                </div>
                <Footer />
            </div>
        </div>)
    }
}


// export component
export default Root


// end of file
