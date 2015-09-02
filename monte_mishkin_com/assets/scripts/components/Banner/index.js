/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* local imports */
import styles from './styles'
import Link from '../Link'


/**
 * Branding banner.
 * @class
 */
@radium
class Banner extends React.Component {
    render() {
        return (<div style={styles.container}>
            <h1>
                <Link
                    to='home'
                    style={styles.link}
                >
                    MM
                </Link>
            </h1>
        </div>)
    }
}


// export component
export default Banner


// end of file
