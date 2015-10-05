/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* local imports */
import styles from './styles'
import Link from 'components/Link'


/**
 * Single tag view.
 * @class
 */
@radium
class Tag extends React.Component {
    render() {
        return (<div style={styles.container}>
            <Link to='tags'>
                View all tags
            </Link>
            {this.props.params.slug}
        </div>)
    }
}


// export component
export default Tag


// end of file
