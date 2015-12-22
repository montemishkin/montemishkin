// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Link from 'components/Link'


/**
 * List of linked tags.
 */
@radium
export default class Tag extends Component {
    static propTypes = {
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }


    render() {
        const {
            url,
            name,
            description,
            style,
            ...unusedProps,
        } = this.props

        return (
            <Link
                {...unusedProps}
                style={[
                    styles.container,
                    style,
                ]}
                to={url}
            >
                <div style={styles.titleBar}>
                    <i
                        style={styles.icon}
                        className='fa fa-tag'
                    />
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
}
