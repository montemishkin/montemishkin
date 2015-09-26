/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* local imports */
import styles from './styles'
import Link from '../Link'


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
            <ul style={styles.names_list}>
                {this.props.tags.map((tag) => (
                    <li
                        style={styles.names_list_item}
                        key={tag.id}
                    >
                        <Link
                            to='tag'
                            params={{slug: tag.slug}}
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
