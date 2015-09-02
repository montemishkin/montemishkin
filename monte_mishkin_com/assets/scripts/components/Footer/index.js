/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* local imports */
import styles from './styles'
import Link from '../Link'


/**
 * Sitewide footer.
 * @class
 */
@radium
class Footer extends React.Component {
    render() {
        return (<div style={styles.container}>
            <span style={styles.left}>
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
            <span style={styles.right}>
                &copy; 2015 <a
                    href='mailto:montemishkin@gmail.com'
                    style={styles.link}
                >
                    Monte Mishkin
                </a>
            </span>
        </div>)
    }
}


// export component
export default Footer


// end of file
