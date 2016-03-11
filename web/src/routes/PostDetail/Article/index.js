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
import CenteredSection from 'components/CenteredSection'
import TableOfContents from 'components/TableOfContents'
import Spinner from 'components/Spinner'


const isProduction = process.env.NODE_ENV === 'production'


function createContent({
    BannerIcon,
    title,
    subtitle,
    content,
    comments,
    ...unusedProps,
}) {
    return (
        <article {...unusedProps}>
            <Banner
                Icon={BannerIcon}
                title={title}
                subtitle={subtitle}
            />
            <CenteredSection>
                {content}
            </CenteredSection>
            {comments && (
                <CenteredSection style={styles.comments}>
                        {comments}
                </CenteredSection>
            )}
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
        BannerIcon: radium(
            props => <img {...props} src='/static/images/logo-blog.svg' />
        ),
        title,
        subtitle,
        tags,
        created,
        content: [
            <div style={styles.infoBar} key='a'>
                <TagList
                    linkStyle={styles.tagListLink}
                    tags={tags}
                />
                <FormattedDate
                    {...created}
                    style={styles.creationDate}
                />
            </div>,
            <div style={styles.content} key='b'>
                <TableOfContents
                    style={styles.toc}
                    content={content}
                />
                <MarkdownContainer style={styles.markdown}>
                    {content}
                </MarkdownContainer>
            </div>,
        ],
        comments: (
            <DisqusThread
                // see: https://help.disqus.com/customer/en/portal/articles/472098-javascript-configuration-variables
                shortname={isProduction ? 'montemishkin' : 'montemishkin-test'}
                identifier={url}
                title={title}
                // TODO: this url should not be hardcoded here
                url={`http://monte.mishkin.com${url}`}
            />
        ),
    })
}


function ErrorContent({error}) {
    return createContent({
        BannerIcon: radium(
            props => <img {...props} src='/static/images/error.svg' />
        ),
        title: 'Woops',
        subtitle: 'something went wrong...',
        content: `Error: ${error.message}`,
    })
}


function LoadingContent() {
    return createContent({
        BannerIcon: Spinner,
        title: 'Loading',
        subtitle: '...',
        content: 'Loading...',
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
