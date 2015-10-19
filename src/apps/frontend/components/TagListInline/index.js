// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Link from 'components/Link'
import List from 'components/List'


/**
 * Inline list of linked tags, accompanied by tag icon.
 */
@radium
export default class TagList extends Component {
    static propTypes = {
        tags: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            slug: PropTypes.string,
        })),
    }


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
            <List style={styles.list} listItemStyle={styles.listItem}>
                {this.props.tags.map((tag) => (
                    <Link
                        to={`/tags/${tag.slug}`}
                        style={styles.link}
                        key={tag.id}
                    >
                        {tag.name}
                    </Link>
                ))}
            </List>
        </div>)
    }
}


// end of file