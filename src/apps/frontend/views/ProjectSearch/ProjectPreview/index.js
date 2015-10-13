// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Link from 'components/Link'
import TagListInline from 'components/TagListInline'
import FormattedDate from 'components/FormattedDate'


// maximum length for title and content previews
const titlePreviewMaxLength = 50
const contentPreviewMaxLength = 200


/**
 * Shortened preview of a single project.
 */
@radium
export default class ProjectPreview extends Component {
    static propTypes = {
        slug: PropTypes.string,
        title: PropTypes.string,
        creationDate: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
        })),
        content: PropTypes.string,
        image: PropTypes.string,
    }


    /**
     * Returns the project's content, stripped of its HTML.
     */
    getStrippedContent() {
        const {content} = this.props.item

        // create a temporary div DOM node
        const divNode = document.createElement('div')
        // populate it with the content we want to strip
        // so that the browser will strip for us
        divNode.innerHTML = content

        // return stripped content (with some fallbacks)
        return divNode.textContent || divNode.innerText || ''
    }


    render() {
        const {
            title,
            creationDate,
            tags,
            slug,
            image,
        } = this.props.item

        // default to displaying full title
        let titlePreview = title
        // if title is too long
        if (title.length > titlePreviewMaxLength) {
            // display only first part of title
            titlePreview = title
                .substr(0, titlePreviewMaxLength) + ' ...'
        }

        // default to displaying full content (stripped of HTML)
        let contentPreview = this.getStrippedContent()
        // if content is too long
        if (contentPreview.length > contentPreviewMaxLength) {
            // display only first part of content
            contentPreview = contentPreview
                .substr(0, contentPreviewMaxLength) + ' ...'
        }

        // props for links to the project
        const linkProps = {
            to: `/projects/${slug}`,
        }

        return (<div style={styles.container}>
            <Link
                {...linkProps}
                style={styles.imageLink}
            >
                <img
                    style={styles.image}
                    alt={`"${title}" Project Thumbnail`}
                    src={image}
                />
            </Link>
            <div style={styles.notImage}>
                <Link
                    {...linkProps}
                    style={styles.title}
                >
                    {titlePreview}
                </Link>
                <div style={styles.dateAndTagListWrapper}>
                    <div style={styles.creationDate}>
                        <FormattedDate date={creationDate} />
                    </div>
                    <div style={styles.tagListWrapper}>
                        <TagListInline tags={tags} />
                    </div>
                </div>
                <Link
                    {...linkProps}
                    style={styles.content}
                >
                    {contentPreview}
                </Link>
            </div>
        </div>)
    }
}


// end of file
