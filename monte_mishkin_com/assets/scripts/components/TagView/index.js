/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* local imports */
import styles from './styles'


/**
 * Single tag view.
 * @class
 */
@radium
class TagView extends React.Component {
    render() {
        return (<div style={styles.container}>
            {this.props.params.slug}
        </div>)
    }
}


// export component
export default TagView


// end of file
