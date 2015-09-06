/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* local imports */
import styles from './styles'


/**
 * View for page where you can search through tags used on the site.
 * @class
 */
@radium
class TagSearchView extends React.Component {
    render() {
        return (<div style={styles.container}>
        </div>)
    }
}


// export component
export default TagSearchView


// end of file
