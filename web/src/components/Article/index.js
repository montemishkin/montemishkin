// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
// import DisqusThread from 'react-disqus-thread'
// local imports
import styles from './styles'
import Banner from 'components/Banner'
import TagList from 'components/TagList'
import FormattedDate from 'components/FormattedDate'
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
        // react component
        BannerIcon: PropTypes.func,
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
        BannerIcon: radium(props => <span {...props} />),
    }


    render() {
        const {
            BannerIcon,
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
                    Icon={BannerIcon}
                    title={title}
                    subtitle={subtitle}
                >
                    <div style={styles.infoBar}>
                        <TagList
                            style={styles.tagList}
                            linkStyle={styles.tagListLink}
                            tags={tags}
                        />
                        <FormattedDate
                            style={styles.creationDate}
                            date={creationDate}
                        />
                    </div>
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
