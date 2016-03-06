// third party imports
import React, {PropTypes} from 'react'
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
}) {
    return (
        <section style={styles.container}>
            <LinkedTitleGroup
                url={url}
                title={title}
                subtitle={subtitle}
            />
            <TagList tags={tags} style={styles.tagList} />
            <FormattedDate {...created} style={styles.date} />
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
