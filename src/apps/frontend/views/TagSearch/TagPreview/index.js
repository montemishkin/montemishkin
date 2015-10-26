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
    }


    render() {
        const {link, title} = this.props

        return (
            <span style={styles.container}>
                <i
                    style={styles.icon}
                    className='fa fa-tag'
                />
                <Link
                    to={link}
                    style={styles.link}
                >
                    {title}
                </Link>
            </span>
        )
    }
}
