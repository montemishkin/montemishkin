/* common react imports */
import React from 'react'
import radium from 'radium'
/* local imports */
import styles from './styles'
import Link from 'components/Link'


/**
 * List of linked tags.
 * @class
 */
@radium
class TagList extends React.Component {
    render() {
        return (<ul style={styles.list}>
            {this.props.tags.map((tag) => (
                <li
                    key={tag.id}
                    style={styles.list_item}
                >
                    <img
                        style={styles.image}
                        alt='Tag Icon'
                        src='/static/images/Price-Tag-50.png'
                    />
                    <Link
                        to={`/tags/${tag.slug}`}
                        style={styles.link}
                    >
                        {tag.name}
                    </Link>
                </li>
            ))}
        </ul>)
    }
}


// allow for type checking of props
TagList.propTypes = {
    tags: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number,
        name: React.PropTypes.string,
        slug: React.PropTypes.string,
    })),
}


// export component
export default TagList


// end of file
