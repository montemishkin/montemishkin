/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* local imports */
import styles from './styles'
import Link from '../Link'


/**
 * Navigation bar.
 * @class
 */
@radium
class Nav extends React.Component {
    // render component
    render() {
        return (<div style={styles.container}>
            <Link
                style={styles.link}
                activeStyle={styles.active_link}
                to='home'
            >
                home
            </Link>
            <Link
                style={styles.link}
                activeStyle={styles.active_link}
                to='about'
            >
                about
            </Link>
            <Link
                style={styles.link}
                activeStyle={styles.active_link}
                to='projects'
            >
                projects
            </Link>
            <Link
                style={styles.link}
                activeStyle={styles.active_link}
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
