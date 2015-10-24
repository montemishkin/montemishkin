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
export default class TagListInline extends Component {
    static propTypes = {
        tags: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string,
            slug: PropTypes.string,
        })),
    }


    render() {
        if (this.props.tags.length === 0) {
            return (<div />)
        }

        return (<div style={styles.container}>
            <i
                style={styles.image}
                className='fa fa-tag'
            />
            <List style={styles.list} listItemStyle={styles.listItem}>
                {this.props.tags.map((tag) => (
                    <Link
                        to={`/tags/${tag.slug}`}
                        style={styles.link}
                        key={tag.slug}
                    >
                        {tag.title}
                    </Link>
                ))}
            </List>
        </div>)
    }
}


// end of file
