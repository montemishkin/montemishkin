// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
// import DisqusThread from 'react-disqus-thread'
// local imports
import styles from './styles'
import Banner from 'components/Banner'
import ArticleInfoBar from 'components/ArticleInfoBar'





// <DisqusThread
//     shortname='montemishkin'
//     identifier={this.props.post.slug}
//     title={this.props.post.title}
//     url='http://www.example.com/example-thread'
//     categoryId='123456'
// />





@radium
export default class Article extends Component {
    static propTypes = {
        imageSrc: PropTypes.string,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        // valid css color
        bannerColor: PropTypes.string.isRequired,
        // TODO: this should be a date?
        creationDate: PropTypes.string.isRequired,
        // should I specify shape here even though it is just passed to TagListInline?
        tags: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
        })),
        content: PropTypes.string,
    }


    render() {
        const {
            bannerColor,
            imageSrc,
            title,
            subtitle,
            creationDate,
            tags,
            content,
            ...unusedProps,
        } = this.props

        return (
            <div {...unusedProps}>
                <Banner
                    style={{backgroundColor: bannerColor}}
                    imageSrc={imageSrc}
                    title={title}
                    subtitle={subtitle}
                >
                    <ArticleInfoBar
                        creationDate={creationDate}
                        tags={tags}
                    />
                </Banner>
                <div style={styles.contentContainer}>
                    <div
                        className='markdown'
                        style={styles.content}
                        dangerouslySetInnerHTML={{
                            __html: content,
                        }}
                    />
                </div>
            </div>
        )
    }
}
