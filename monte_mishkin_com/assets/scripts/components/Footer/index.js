/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* local imports */
import styles from './styles'


/**
 * Sitewide footer.
 * @class
 */
@radium
class Footer extends React.Component {
    render() {
        return (<div style={styles.container}>
            copyright 2015
        </div>)
    }
}


// export component
export default Footer


// end of file
