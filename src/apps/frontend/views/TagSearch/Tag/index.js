// third party imports
import React from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Link from 'components/Link'


/**
 * List of linked tags.
 */
@radium
export default class Tag extends React.Component {
    static propTypes = {
        id: React.PropTypes.number,
        name: React.PropTypes.string,
        slug: React.PropTypes.string,
    }


    render() {
        const {slug, name} = this.props.item

        return (
            <span>
                <img
                    style={styles.image}
                    alt='Tag Icon'
                    src='/static/images/Price-Tag-50.png'
                />
                <Link
                    to={`/tags/${slug}`}
                    style={styles.link}
                >
                    {name}
                </Link>
            </span>
        )
    }
}


// end of file