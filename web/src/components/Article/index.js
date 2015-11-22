// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
// import DisqusThread from 'react-disqus-thread'
// local imports
import styles from './styles'
import Banner from 'components/Banner'
import ArticleInfoBar from 'components/ArticleInfoBar'
import MarkdownContainer from 'components/MarkdownContainer'





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
        style: PropTypes.object,
        // valid css color
        bannerColor: PropTypes.string,
        imageSrc: PropTypes.string,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        // TODO: this should be a date?
        creationDate: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        })).isRequired,
        content: PropTypes.string.isRequired,
    }


    static defaultProps = {
        bannerColor: 'transparent',
        // TODO: get a default image
        imageSrc: '',
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
            <article {...unusedProps}>
                <Banner
                    style={{backgroundColor: bannerColor}}
                    Icon={props => <img {...props} src={imageSrc} />}
                    title={title}
                    subtitle={subtitle}
                >
                    <ArticleInfoBar
                        creationDate={creationDate}
                        tags={tags}
                    />
                </Banner>
                <section style={styles.contentContainer}>
                    <MarkdownContainer style={styles.content}>
                        {content}
                    </MarkdownContainer>
                </section>
            </article>
        )
    }
}
