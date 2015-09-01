/* common react imports */
import React from 'react/addons'
import radium from 'radium'
import {Link} from 'react-router'
/* local imports */
import styles from './styles'


// pass react-router's `Link` component through Radium decorator
// for proper cross browser styling, etc.
const RadLink = radium(Link)


/**
 * Navigation bar.
 * @class
 */
@radium
class Nav extends React.Component {
    // render component
    render() {
        return (<div style={styles.container}>
            <RadLink
                style={styles.link}
                activeStyle={styles.active_link}
                to='home'
            >
                home
            </RadLink>
            <RadLink
                style={styles.link}
                activeStyle={styles.active_link}
                to='about'
            >
                about
            </RadLink>
            <RadLink
                style={styles.link}
                activeStyle={styles.active_link}
                to='projects'
            >
                projects
            </RadLink>
            <RadLink
                style={styles.link}
                activeStyle={styles.active_link}
                to='blog'
            >
                blog
            </RadLink>
        </div>)
    }
}


// export component
export default Nav


// end of file
