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
 * Sitewide footer.
 * @class
 */
@connectToStores
@radium
class Footer extends React.Component {
    static getStores() {
        return [ResponsiveStore]
    }


    static getPropsFromStores() {
        return ResponsiveStore.getState()
    }


    render() {
        // default to infinity styling for `container`
        let container_style = styles.container_infinity
        // default to infinity styling for `left`
        let left_style = styles.left_infinity
        // default to infinity styling for `right`
        let right_style = styles.right_infinity
        // if viewport is less than medium
        if (this.props.browser_less_than.medium) {
            // then use medium styling
            container_style = styles.container_medium
            left_style = styles.left_medium
            right_style = styles.right_medium
        }

        return (<div style={container_style}>
            <div style={left_style}>
                <Link
                    to='home'
                    style={styles.nav_link}
                >
                    Home
                </Link>
                <Link
                    to='about'
                    style={styles.nav_link}
                >
                    About
                </Link>
                <Link
                    to='projects'
                    style={styles.nav_link}
                >
                    Projects
                </Link>
                <Link
                    to='blog'
                    style={styles.nav_link}
                >
                    Blog
                </Link>
            </div>
            <div style={right_style}>
                &copy; {(new Date()).getFullYear() + ' '}
                <a
                    href='mailto:montemishkin@gmail.com'
                    style={styles.email_link}
                >
                    Monte Mishkin
                </a>
            </div>
        </div>)
    }
}


// export component
export default Footer


// end of file
