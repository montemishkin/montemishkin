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
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        description: PropTypes.string,
    }


    render() {
        const {link, title, description} = this.props

        return (
            <div style={styles.container}>
                <Link
                    to={link}
                    style={styles.link}
                >
                    <i
                        style={styles.icon}
                        className='fa fa-tag'
                    />
                    <h3 style={styles.title}>
                        {title}
                    </h3>
                </Link>
                <span style={styles.description}>
                    {description}
                </span>
            </div>
        )
    }
}
