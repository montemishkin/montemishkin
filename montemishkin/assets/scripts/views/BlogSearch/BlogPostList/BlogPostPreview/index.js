/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* local imports */
import styles from './styles'
import Link from 'components/Link'
import TagListInline from 'components/TagListInline'
import FormattedDate from 'components/FormattedDate'


// maximum length for title and content previews
const title_preview_max_length = 50
const content_preview_max_length = 200


/**
 * Shortened preview of a single blog post.
 * @class
 */
@radium
class BlogPostPreview extends React.Component {
    /**
     * Returns the post's content, stripped of its HTML.
     */
    getStrippedContent() {
        // create a temporary div DOM node
        const div_node = document.createElement('div')
        // populate it with the content we want to strip
        // so that the browser will strip for us
        div_node.innerHTML = this.props.content

        // return stripped content (with some fallbacks)
        return div_node.textContent || div_node.innerText || ''
    }


    render() {
        // default to displaying full title
        let title_preview = this.props.title
        // if title is too long
        if (this.props.title.length > title_preview_max_length) {
            // display only first part of title
            title_preview = this.props.title
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

        // props for links to the blog post
        const link_props = {
            to: 'blog-post',
            params: {slug: this.props.slug},
        }

        return (<div style={styles.container}>
            <Link
                {...link_props}
                style={styles.title}
            >
                {title_preview}
            </Link>
            <div style={styles.date_and_tag_list_wrapper}>
                <div style={styles.creation_date}>
                    <FormattedDate date={this.props.creation_date} />
                </div>
                <div style={styles.tag_list_wrapper}>
                    <TagListInline tags={this.props.tags} />
                </div>
            </div>
            <Link
                {...link_props}
                style={styles.content}
            >
                {content_preview}
            </Link>
        </div>)
    }
}


// allow for type checking on props
BlogPostPreview.propTypes = {
    slug: React.PropTypes.string,
    title: React.PropTypes.string,
    creation_date: React.PropTypes.string,
    tags: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number,
        name: React.PropTypes.string,
    })),
    content: React.PropTypes.string,
}


// export component
export default BlogPostPreview


// end of file
