// third party imports
import React, {PropTypes} from 'react'
import {css} from 'aphrodite'
import radium from 'radium'
// local imports
import styles from './styles'
import LinkedTitleGroup from 'components/LinkedTitleGroup'
import TagList from 'components/TagList'
import FormattedDate from 'components/FormattedDate'


function ArticlePreview ({
    title,
    subtitle,
    created,
    tags,
    url,
    className,
    ...unusedProps,
}) {
    return (
        <section
            {...unusedProps}
            className={`${css(styles.container)} ${className}`}
        >
            <LinkedTitleGroup
                url={url}
                title={title}
                subtitle={subtitle}
            />
            <div className={css(styles.tagList)}>
                <TagList tags={tags} />
            </div>
            <FormattedDate {...created} className={css(styles.date)} />
        </section>
    )
}


ArticlePreview.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    created: PropTypes.shape({
        year: PropTypes.number.isRequired,
        month: PropTypes.number.isRequired,
        day: PropTypes.number.isRequired,
    }).isRequired,
    tags: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    })).isRequired,
}


export default radium(ArticlePreview)
