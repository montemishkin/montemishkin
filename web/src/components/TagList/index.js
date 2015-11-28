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
            title: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            description: PropTypes.string,
        })).isRequired,
    }


    render() {
        const {tags, style, ...unusedProps} = this.props

        if (tags.length === 0) {
            return (<div />)
        }

        return (
            <div
                style={[
                    styles.container,
                    style,
                ]}
            >
                <i
                    style={styles.icon}
                    className='fa fa-tag'
                />
                <List style={styles.list} listItemStyle={styles.listItem}>
                    {tags.map((tag, key) => (
                        <Link
                            to={tag.link}
                            style={styles.link}
                            key={key}
                            title={tag.description}
                        >
                            {tag.title}
                        </Link>
                    ))}
                </List>
            </div>
        )
    }
}
