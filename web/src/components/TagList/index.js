// third party imports
import React, {PropTypes} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Link from 'components/Link'
import List from 'components/List'


function TagList({tags, style, linkStyle, linkClassName, ...unusedProps}) {
    if (tags.length === 0) {
        return (<div />)
    }

    return (
        <List
            {...unusedProps}
            style={[styles.list, style]}
            listItemStyle={styles.listItem}
        >
            {tags.map(({url, description, name}, key) => (
                <Link
                    to={url}
                    style={[styles.link, linkStyle]}
                    className={linkClassName}
                    key={key}
                    title={description}
                >
                    {name}
                </Link>
            ))}
        </List>
    )
}


TagList.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        description: PropTypes.string,
    })),
}


TagList.defaultProps = {
    tags: [],
}


export default radium(TagList)
