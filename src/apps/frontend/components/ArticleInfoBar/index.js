// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import TagListInline from 'components/TagListInline'
import FormattedDate from 'components/FormattedDate'


/**
 * Displays stats and info relating to an article.
 */
@radium
export default class ArticleInfoBar extends Component {
    static propTypes = {
        creationDate: PropTypes.string,
        // do I detail this out here even though it is just passed on?
        tags: PropTypes.arrayOf(PropTypes.shape({
            link: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })).isRequired,
    }


    render() {
        const {
            creationDate,
            tags,
            style,
            ...unusedProps,
        } = this.props

        return (
            <div
                style={{
                    ...styles.container,
                    ...style,
                }}
                {...unusedProps}
            >
                <FormattedDate
                    style={styles.creationDate}
                    date={creationDate}
                />
                <TagListInline tags={tags} />
            </div>
        )
    }
}
