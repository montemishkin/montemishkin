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
        // default to infinity styling for `inner_container`
        let inner_container_style = styles.inner_container_infinity
        // default to infinity styling for `left`
        let left_style = styles.left_infinity
        // default to infinity styling for `right`
        let right_style = styles.right_infinity
        // default to use full name for copywrite link
        let copywrite_link_text = 'Monte Mishkin'
        // default to use full year for copywrite year text
        let copywrite_year_text = (new Date()).getFullYear()
        // if viewport is less than medium
        if (this.props.browser_less_than.medium) {
            // then use medium styling
            inner_container_style = styles.inner_container_medium
            left_style = styles.left_medium
            right_style = styles.right_medium
            // use initials for copywrite link
            copywrite_link_text = 'MM'
            // dont use a date in copywrite
            copywrite_year_text = ''
        }

        return (<div style={styles.outer_container}>
            <div style={inner_container_style}>
                <span style={left_style}>
                    <Link
                        to='home'
                        style={styles.link}
                    >
                        Home
                    </Link>
                    <Link
                        to='about'
                        style={styles.link}
                    >
                        About
                    </Link>
                    <Link
                        to='projects'
                        style={styles.link}
                    >
                        Projects
                    </Link>
                    <Link
                        to='blog'
                        style={styles.link}
                    >
                        Blog
                    </Link>
                </span>
                <span style={right_style}>
                    &copy; {copywrite_year_text + ' '}
                    <a
                        href='mailto:montemishkin@gmail.com'
                        style={styles.link}
                    >
                        {copywrite_link_text}
                    </a>
                </span>
            </div>
        </div>)
    }
}


// export component
export default Footer


// end of file
