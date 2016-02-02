// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Link from 'components/Link'
import List from 'components/List'


class TagList extends Component {
    static propTypes = {
        tags: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            description: PropTypes.string,
        })),
    }


    static defaultProps = {
        tags: [],
    }


    render() {
        const {tags, style, linkStyle, ...unusedProps} = this.props

        if (tags.length === 0) {
            return (<div />)
        }

        return (
            <div
                {...unusedProps}
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
                    {tags.map(({url, description, name}, key) => (
                        <Link
                            to={url}
                            style={[
                                styles.link,
                                linkStyle,
                            ]}
                            key={key}
                            title={description}
                        >
                            {name}
                        </Link>
                    ))}
                </List>
            </div>
        )
    }
}


export default radium(TagList)
