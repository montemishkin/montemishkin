/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* local imports */
import styles from './styles'


/**
 * Shortened preview of a single blog post.
 * @class
 */
@radium
class BlogPostPreview extends React.Component {
    render() {
        return (<div style={styles.container}>
            <p styles={styles.title}>
                {this.props.title}
            </p>
            <p style={styles.creation_date}>
                {this.props.creation_date}
            </p>
            <p style={styles.tags}>
                {this.props.tags}
            </p>
            <p styles={styles.teaser}>
                {this.props.content.substr(0, 100) + '...'}
            </p>
        </div>)
    }
}


// allow for type checking on props
BlogPostPreview.PropTypes = {
    title: React.PropTypes.string,
    creation_date: React.PropTypes.string,
    tags: React.PropTypes.string,
    content: React.PropTypes.string,
}


// export component
export default BlogPostPreview


// end of file
