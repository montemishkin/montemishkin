// third party imports
import React, {PropTypes} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Link from 'components/Link'


function TagPreview({
    url,
    name,
    description,
}) {
    return (
        <Link to={url} style={styles.container}>
            <div style={styles.titleBar}>
                <i style={styles.icon} className='fa fa-tag' />
                <span style={styles.title}>
                    {name}
                </span>
            </div>
            <span style={styles.description}>
                {description}
            </span>
        </Link>
    )
}


TagPreview.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}


export default radium(TagPreview)
