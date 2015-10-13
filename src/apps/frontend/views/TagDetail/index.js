// third party imports
import React from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Link from 'components/Link'


/**
 * Single tag view.
 */
@radium
export default class Tag extends React.Component {
    render() {
        return (<div style={styles.container}>
            <Link to='/tags'>
                View all tags
            </Link>
            {this.props.params.slug}
        </div>)
    }
}


// end of file
