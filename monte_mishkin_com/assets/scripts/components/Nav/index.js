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
 * Navigation bar.
 * @class
 */
@connectToStores
@radium
class Nav extends React.Component {
    static getStores() {
        return [ResponsiveStore]
    }


    static getPropsFromStores() {
        return ResponsiveStore.getState()
    }


    render() {
        // default to infinity styling for container
        let container_style = styles.container_infinity
        // if viewport is less than medium
        if (this.props.browser_less_than.medium) {
            // then use medium styling
            container_style = styles.container_medium
        }

        return (<div style={container_style}>
            <Link
                style={styles.link}
                activeStyle={styles.link_active}
                to='home'
            >
                home
            </Link>
            <Link
                style={styles.link}
                activeStyle={styles.link_active}
                to='about'
            >
                about
            </Link>
            <Link
                style={styles.link}
                activeStyle={styles.link_active}
                to='projects'
            >
                projects
            </Link>
            <Link
                style={styles.link}
                activeStyle={styles.link_active}
                to='blog'
            >
                blog
            </Link>
        </div>)
    }
}


// export component
export default Nav


// end of file
