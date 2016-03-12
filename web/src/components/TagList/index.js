// third party imports
import React, {PropTypes} from 'react'
import {css} from 'aphrodite'
// local imports
import styles from './styles'
import Link from 'components/Link'
import List from 'components/List'


function TagList({tags, className, linkStyle, linkClassName, ...unusedProps}) {
    if (tags.length === 0) {
        return (<div />)
    }

    return (
        <List
            {...unusedProps}
            className={`${css(styles.list)} ${className}`}
            listItemClassName={css(styles.listItem)}
        >
            {tags.map(({url, description, name}, key) => (
                <Link
                    to={url}
                    style={linkStyle}
                    className={`${css(styles.link)} ${linkClassName}`}
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


export default TagList
