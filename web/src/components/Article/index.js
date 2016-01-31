// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
import DisqusThread from 'react-disqus-thread'
// local imports
import styles from './styles'
import Loader from 'components/Loader'
import Banner from 'components/Banner'
import TagList from 'components/TagList'
import FormattedDate from 'components/FormattedDate'
import MarkdownContainer from 'components/MarkdownContainer'
import Spinner from 'components/Spinner'


const isProduction = process.env.NODE_ENV === 'production'


class Article extends Component {
    static propTypes = {
        url: PropTypes.string,
        title: PropTypes.string,
        subtitle: PropTypes.string,
        created: PropTypes.shape({
            year: PropTypes.number,
            month: PropTypes.number,
            day: PropTypes.number,
        }),
        tags: PropTypes.arrayOf(PropTypes.shape({
            url: PropTypes.string,
            name: PropTypes.string,
            description: PropTypes.string,
        })),
        content: PropTypes.string,
        bannerImage: PropTypes.shape({
            url: PropTypes.string,
        }),
    }


    createContent = ({
        BannerIcon,
        title,
        subtitle,
        tags,
        created,
        content,
    }) => (
        <article {...this.props}>
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
                        {...created}
                        style={styles.creationDate}
                    />
                </div>
            </Banner>
            {content}
        </article>
    )


    LoadedContent = () => {
        const {
            title,
            subtitle,
            tags,
            created,
            content,
            url,
            bannerImage,
        } = this.props

        return this.createContent({
            BannerIcon: radium(
                props => <img {...props} src={bannerImage.url} />
            ),
            title,
            subtitle,
            tags,
            created,
            content: (
                <section style={styles.contentContainer}>
                    <MarkdownContainer style={styles.content}>
                        {content}
                    </MarkdownContainer>
                    <div style={styles.disqus}>
                        <DisqusThread
                            // see: https://help.disqus.com/customer/en/portal/articles/472098-javascript-configuration-variables
                            shortname={isProduction ? 'montemishkin' : 'montemishkin-test'}
                            identifier={url}
                            title={title}
                            // TODO: this url should not be hardcoded here
                            url={`http://monte.mishkin.com${url}`}
                        />
                    </div>
                </section>
            ),
        })
    }


    ErrorContent = () => this.createContent({
        BannerIcon: radium(
            props => <i {...props} className='fa fa-exclamation' />
        ),
        title: 'Woops',
        subtitle: 'something went wrong...',
        content: (
            <section style={styles.contentContainer}>
                <div style={styles.content}>
                    Error: {this.props.loadError.message}
                </div>
            </section>
        ),
    })


    LoadingContent = () => this.createContent({
        BannerIcon: Spinner,
        title: 'Loading',
        subtitle: '...',
        content: (
            <section style={styles.contentContainer}>
                <div style={styles.content}>
                    Loading...
                </div>
            </section>
        ),
    })


    render() {
        const {
            props: {
                isLoading,
                loadError,
                loadDateTime,
                reload,
            },
            LoadingContent,
            ErrorContent,
            LoadedContent,
        } = this

        return (
            <Loader
                isInvalid={!loadDateTime && !loadError}
                isLoading={isLoading}
                error={loadError}
                reload={reload}
                LoadingContent={LoadingContent}
                ErrorContent={ErrorContent}
                LoadedContent={LoadedContent}
            />
        )
    }
}


export default radium(Article)
