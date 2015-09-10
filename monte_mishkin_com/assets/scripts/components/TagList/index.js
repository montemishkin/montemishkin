/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* misc third party imports */
import {kebabCase} from 'lodash'
/* local imports */
import styles from './styles'
import Link from '../Link'


/**
 * List of linked tags, accompanied by tag icon.
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
                            to='tags'
                            query={{
                                filter: kebabCase(tag.name),
                            }}
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
    })),
}


// export component
export default TagList


// end of file
