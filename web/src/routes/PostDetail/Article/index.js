// third party imports
import React, {PropTypes} from 'react'
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
import BlogLogo from 'components/Logos/Blog'


const isProduction = process.env.NODE_ENV === 'production'


function createContent({
    BannerIcon,
    title,
    subtitle,
    tags,
    created,
    content,
    ...unusedProps,
}) {
    return (
        <article {...unusedProps}>
            <Banner
                Icon={BannerIcon}
                title={title}
                subtitle={subtitle}
            />
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
            {content}
        </article>
    )
}


function LoadedContent({
    title,
    subtitle,
    tags,
    created,
    content,
    url,
}) {
    return createContent({
        BannerIcon: BlogLogo,
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


function ErrorContent({error}) {
    return createContent({
        BannerIcon: radium(
            props => <i {...props} className='fa fa-exclamation' />
        ),
        title: 'Woops',
        subtitle: 'something went wrong...',
        content: (
            <section style={styles.contentContainer}>
                <div style={styles.content}>
                    Error: {error.message}
                </div>
            </section>
        ),
    })
}


function LoadingContent() {
    return createContent({
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
}


function Article({
    isLoading,
    loadError,
    loadDateTime,
    reload,
    ...unusedProps,
}) {
    return (
        <Loader
            // passes article data onto *Content components
            {...unusedProps}
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


Article.propTypes = {
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
}


export default radium(Article)
