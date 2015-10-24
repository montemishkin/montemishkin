// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
// import DisqusThread from 'react-disqus-thread'
// local imports
import styles from './styles'
import FormattedDate from 'components/FormattedDate'
import TagListInline from 'components/TagListInline'





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
            title,
            subtitle,
            bannerColor,
            creationDate,
            tags,
            content,
            ...unusedProps,
        } = this.props

        return (
            <div {...unusedProps}>
                <div
                    style={[
                        styles.bannerContainer,
                        {backgroundColor: bannerColor},
                    ]}
                >
                    <div style={styles.banner}>
                        <img
                            src='/static/images/bird-logo.png'
                            style={styles.image}
                        />
                        <h1 style={styles.title}>
                            {title}
                        </h1>
                        <h2 style={styles.subtitle}>
                            {subtitle}
                        </h2>
                        <div style={styles.infoContainer}>
                            <FormattedDate
                                style={styles.creationDate}
                                date={creationDate}
                            />
                            <TagListInline tags={tags} />
                        </div>
                    </div>
                </div>
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
