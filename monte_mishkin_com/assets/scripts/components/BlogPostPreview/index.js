/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* misc third party imports */
import {kebabCase} from 'lodash'
/* local imports */
import styles from './styles'
import Link from '../Link'
import TagList from '../TagList'
import Date from '../Date'


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
        // default to displaying full title
        let title_preview = this.props.title
        // if title is too long
        if (this.props.title.length > title_preview_max_length) {
            // display only first part of title
            title_preview = this.props.title
                .substr(0, title_preview_max_length) + ' ...'
        }

        // default to displaying full content
        let content_preview = this.props.content
        // if content is too long
        if (this.props.content.length > content_preview_max_length) {
            // display only first part of content
            content_preview = this.props.content
                .substr(0, content_preview_max_length) + ' ...'
        }

        // props for links to the blog post
        const link_props = {
            to: 'blog-post',
            params: {
                slug: kebabCase(this.props.title),
            },
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
                    <Date date={this.props.creation_date} />
                </div>
                <div style={styles.tag_list_wrapper}>
                    <TagList tags={this.props.tags} />
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
