/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* local imports */
import styles from './styles'


/**
 * Blog page view.
 * @class
 */
@radium
class Blog extends React.Component {
    render() {
        return (<div style={styles.container}>
            <ul>
                <li>list of recent blog posts</li>
                <li>filter by date, tag, content, title, ... capabilities</li>
            </ul>
        </div>)
    }
}


// export component
export default Blog


// end of file
