/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* misc third party imports */
import {kebabCase} from 'lodash'
/* local imports */
import styles from './styles'
import Link from '../Link'
import TagList from '../TagList'


// maximum length for title and content previews
const title_preview_max_length = 50
const content_preview_max_length = 200


/**
 * Shortened preview of a single blog post.
 * @class
 */
@radium
class BlogPostPreview extends React.Component {
    render() {
        let title_preview = this.props.title
        if (this.props.title.length > title_preview_max_length) {
            title_preview = this.props.title
                .substr(0, title_preview_max_length) + '...'
        }

        let content_preview = this.props.content
        if (this.props.content.length > content_preview_max_length) {
            content_preview = this.props.content
                .substr(0, content_preview_max_length) + '...'
        }

        // props for links to the blog post
        const post_link_props = {
            to: 'blog-post',
            params: {
                slug: kebabCase(this.props.title),
            },
            style: styles.link,
        }

        // props for link to the date
        const date_link_props = {
            to: 'blog-search',
            query: {
                filter: this.props.creation_date,
            },
            style: styles.link,
        }

        return (<div style={styles.container}>
            <Link {...post_link_props}>
                <span style={styles.title}>
                    {title_preview}
                </span>
            </Link>
            <Link {...date_link_props}>
                <span style={styles.creation_date}>
                    {this.props.creation_date}
                </span>
            </Link>
            <span style={styles.tag_list}>
                <TagList tags={this.props.tags} />
            </span>
            <Link {...post_link_props}>
                <span style={styles.content}>
                    {content_preview}
                </span>
            </Link>
        </div>)
    }
}


// allow for type checking on props
BlogPostPreview.propTypes = {
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
