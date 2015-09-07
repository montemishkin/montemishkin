/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* local imports */
import styles from './styles'
import Paper from '../Paper'


/**
 * View for page where you can search through tags used on the site.
 * @class
 */
@radium
class TagSearchView extends React.Component {
    render() {
        return (<Paper title='Tags'>
            tag search view {styles.foo}
        </Paper>)
    }
}


// export component
export default TagSearchView


// end of file
