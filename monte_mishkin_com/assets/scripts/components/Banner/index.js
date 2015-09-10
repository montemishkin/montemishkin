/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* common alt imports */
import connectToStores from 'alt/utils/connectToStores'
/* local imports */
import styles from './styles'
import Link from '../Link'
import ResponsiveStore from '../../stores/ResponsiveStore'


/**
 * Branding banner.
 * @class
 */
@connectToStores
@radium
class Banner extends React.Component {
    static getStores() {
        return [ResponsiveStore]
    }


    static getPropsFromStores() {
        return ResponsiveStore.getState()
    }


    render() {
        // default to infinity styling
        let header_style = styles.header_infinity
        let subheader_style = styles.subheader_infinity
        // if viewport is less than medium size
        if (this.props.browser_less_than.medium) {
            // then use medium styling
            header_style = styles.header_medium
            subheader_style = styles.subheader_medium
        }

        return (<div style={styles.container}>
            <h1 style={header_style}>
                <Link
                    to='home'
                    style={styles.link}
                >
                    MM
                </Link>
            </h1>
            <h2 style={subheader_style}>
                Your friend on the web
            </h2>
        </div>)
    }
}


// export component
export default Banner


// end of file
