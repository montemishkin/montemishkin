// third party imports
import React from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Link from 'components/Link'


/**
 * Inline list of linked tags, accompanied by tag icon.
 * @class
 */
@radium
class TagList extends React.Component {
    render() {
        if (this.props.tags.length === 0) {
            return (<div />)
        }

        return (<div style={styles.container}>
            <img
                style={styles.image}
                alt='Tag Icon'
                src='/static/images/Price-Tag-50.png'
            />
            <ul style={styles.namesList}>
                {this.props.tags.map((tag) => (
                    <li
                        style={styles.namesListItem}
                        key={tag.id}
                    >
                        <Link
                            to={`/tags/${tag.slug}`}
                            style={styles.link}
                        >
                            {tag.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>)
    }
}


// allow for type checking on props
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
