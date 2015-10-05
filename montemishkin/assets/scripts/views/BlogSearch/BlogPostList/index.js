/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* local imports */
import styles from './styles'
import BlogPostPreview from './BlogPostPreview'


/**
 * List of blog post previews.
 * @class
 */
@radium
class BlogPostList extends React.Component {
    render() {
        return (<ul style={styles.list}>
            {this.props.posts.map((post, index, array) => {
                // default to regular `list_item` style
                let list_item_style = styles.list_item
                // if this is the last item
                if (index === array.length - 1) {
                    // then use special `list_item_last` style
                    list_item_style = styles.list_item_last
                }

                return (
                    <li
                        style={list_item_style}
                        key={post.id}
                    >
                        <BlogPostPreview
                            slug={post.slug}
                            title={post.title}
                            creation_date={post.creation_date}
                            tags={post.tags}
                            content={post.content}
                        />
                    </li>
                )
            })}
        </ul>)
    }
}


// allow for type checking on props
BlogPostList.propTypes = {
    posts: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number,
        slug: React.PropTypes.string,
        title: React.PropTypes.string,
        creation_date: React.PropTypes.string,
        content: React.PropTypes.string,
        tags: React.PropTypes.arrayOf(React.PropTypes.shape({
            id: React.PropTypes.number,
            name: React.PropTypes.string,
            slug: React.PropTypes.string,
        })),
    })),
}


// export component
export default BlogPostList


// end of file
