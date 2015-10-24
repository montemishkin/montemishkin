// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Link from 'components/Link'
import ArticleInfoBar from 'components/ArticleInfoBar'


// maximum length for content preview
const contentPreviewMaxLength = 180


/**
 * Shortened preview of a single article.
 */
@radium
export default class ArticlePreview extends Component {
    static propTypes = {
        // link to full article
        link: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        creationDate: PropTypes.string,
        // do I detail this out here even though it is just passed on?
        tags: PropTypes.arrayOf(PropTypes.shape({
            slug: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })),
        content: PropTypes.string.isRequired,
    }


    /**
     * Article's content, stripped of its HTML.
     */
    get strippedContent() {
        const {content} = this.props

        // TODO: figure out a way to do this that doesn't rely on `document`
        // (so it can work on the server too)

        // create a temporary div DOM node
        let divNode = {}
        if (typeof document !== 'undefined') {
            divNode = document.createElement('div')
        }
        // populate it with the content we want to strip
        // so that the browser will strip for us
        divNode.innerHTML = content

        // return stripped content (with some fallbacks)
        return divNode.textContent || divNode.innerText || ''
    }


    render() {
        const {
            title,
            subtitle,
            creationDate,
            tags,
            link,
            style,
            ...unusedProps,
        } = this.props

        // default to displaying full content (stripped of HTML)
        let contentPreview = this.strippedContent
        // if content is too long
        if (contentPreview.length > contentPreviewMaxLength) {
            // display only first part of content
            contentPreview = contentPreview
                .substr(0, contentPreviewMaxLength) + ' ...'
        }

        return (
            <section
                style={{
                    ...styles.container,
                    ...style,
                }}
            >
                <Link
                    to={link}
                    style={styles.titleLink}
                >
                    <h2 style={styles.title}>
                        {title}
                    </h2>
                </Link>
                <h3 style={styles.subtitle}>
                    {subtitle}
                </h3>
                <ArticleInfoBar
                    style={styles.infoBar}
                    creationDate={creationDate}
                    tags={tags}
                />
                <Link
                    to={link}
                    style={styles.content}
                >
                    {contentPreview}
                </Link>
            </section>
        )
    }
}
