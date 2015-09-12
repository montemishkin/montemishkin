/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* misc third party imports */
import {kebabCase, trimLeft} from 'lodash'
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
    getPrettyCreationDateString() {
        const month_names = [
            'January', 'February', 'March',
            'April', 'May', 'June', 'July',
            'August', 'September', 'October',
            'November', 'December',
        ].map(name => name.substr(0, 3))

        // e.g. ['2015', '8', '22']
        const parts = this.props.creation_date
            // grab just the date part (not the time part)
            .substr(0, this.props.creation_date.indexOf('T'))
            // split into array of parts
            .split('-')
            // strip leading zeroes
            .map(number_string => trimLeft(number_string, '0'))

        return `${month_names[parts[1] - 1]} ${parts[2]}, ${parts[0]}`
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

        // default to displaying full content
        let content_preview = this.props.content
        // if content is too long
        if (this.props.content.length > content_preview_max_length) {
            // display only first part of content
            content_preview = this.props.content
                .substr(0, content_preview_max_length) + ' ...'
        }

        // props for links to the blog post
        const post_link_props = {
            to: 'blog-post',
            params: {
                slug: kebabCase(this.props.title),
            },
        }

        // props for link to the date
        const date_link_props = {
            to: 'blog',
            query: {
                filter: this.props.creation_date
                    .substr(0, this.props.creation_date.indexOf('T')),
            },
        }

        return (<div style={styles.container}>
            <Link
                {...post_link_props}
                style={styles.title}
            >
                {title_preview}
            </Link>
            <div style={styles.date_and_tag_list_wrapper}>
                <Link
                    {...date_link_props}
                    style={styles.date}
                >
                    {this.getPrettyCreationDateString()}
                </Link>
                <div style={styles.tag_list_wrapper}>
                    <TagList tags={this.props.tags} />
                </div>
            </div>
            <Link
                {...post_link_props}
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
