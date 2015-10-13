// third party imports
import React from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Link from 'components/Link'
import TagListInline from 'components/TagListInline'
import FormattedDate from 'components/FormattedDate'


// maximum length for title and content previews
const title_preview_max_length = 50
const content_preview_max_length = 200


/**
 * Shortened preview of a single project.
 * @class
 */
@radium
class ProjectPreview extends React.Component {
    /**
     * Returns the project's content, stripped of its HTML.
     */
    getStrippedContent() {
        const {content} = this.props.item

        // create a temporary div DOM node
        const div_node = document.createElement('div')
        // populate it with the content we want to strip
        // so that the browser will strip for us
        div_node.innerHTML = content

        // return stripped content (with some fallbacks)
        return div_node.textContent || div_node.innerText || ''
    }


    render() {
        const {
            title,
            creation_date,
            tags,
            slug,
            image,
        } = this.props.item

        // default to displaying full title
        let title_preview = title
        // if title is too long
        if (title.length > title_preview_max_length) {
            // display only first part of title
            title_preview = title
                .substr(0, title_preview_max_length) + ' ...'
        }

        // default to displaying full content (stripped of HTML)
        let content_preview = this.getStrippedContent()
        // if content is too long
        if (content_preview.length > content_preview_max_length) {
            // display only first part of content
            content_preview = content_preview
                .substr(0, content_preview_max_length) + ' ...'
        }

        // props for links to the project
        const link_props = {
            to: `/projects/${slug}`,
        }

        return (<div style={styles.container}>
            <Link
                {...link_props}
                style={styles.image_link}
            >
                <img
                    style={styles.image}
                    alt={`"${title}" Project Thumbnail`}
                    src={image}
                />
            </Link>
            <div style={styles.not_image}>
                <Link
                    {...link_props}
                    style={styles.title}
                >
                    {title_preview}
                </Link>
                <div style={styles.date_and_tag_list_wrapper}>
                    <div style={styles.creation_date}>
                        <FormattedDate date={creation_date} />
                    </div>
                    <div style={styles.tag_list_wrapper}>
                        <TagListInline tags={tags} />
                    </div>
                </div>
                <Link
                    {...link_props}
                    style={styles.content}
                >
                    {content_preview}
                </Link>
            </div>
        </div>)
    }
}


// allow for type checking on props
ProjectPreview.propTypes = {
    slug: React.PropTypes.string,
    title: React.PropTypes.string,
    creation_date: React.PropTypes.string,
    tags: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number,
        name: React.PropTypes.string,
    })),
    content: React.PropTypes.string,
    image: React.PropTypes.string,
}


// export component
export default ProjectPreview


// end of file
