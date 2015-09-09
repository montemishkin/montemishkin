/* common react imports */
import React from 'react/addons'
import {RouteHandler} from 'react-router'
import radium from 'radium'
/* common alt imports */
import connectToStores from 'alt/utils/connectToStores'
/* local imports */
import styles from './styles'
import Banner from '../Banner'
import Nav from '../Nav'
import Footer from '../Footer'
import ResponsiveStore from '../../stores/ResponsiveStore'


/**
 * Root level component.
 * @class
 */
@connectToStores
@radium
class Root extends React.Component {
    static getStores() {
        return [ResponsiveStore]
    }


    static getPropsFromStores() {
        return ResponsiveStore.getState()
    }


    render() {
        // default to infinity viewport styling for inner container
        let inner_container_style = styles.inner_container_infinity
        // if viewport is less than medium
        if (this.props.browser_less_than.medium) {
            // then use medium styling
            inner_container_style = styles.inner_container_style_medium
        // if viewport is less than large
        } else if (this.props.browser_less_than.large) {
            // then use large styling
            inner_container_style = styles.inner_container_large
        }

        // default to infinity viewport styling for content
        let content_style = styles.content_infinity
        // if viewport is less than medium
        if (this.props.browser_less_than.medium) {
            // then use medium styling
            content_style = styles.content_medium
        }

        return (<div style={styles.outer_container}>
            <div style={inner_container_style}>
                <Banner />
                <Nav />
                <div style={content_style}>
                    <RouteHandler />
                </div>
                <Footer />
            </div>
        </div>)
    }
}


// export component
export default Root


// end of file
