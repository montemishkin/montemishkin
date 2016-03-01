// third party imports
import React, {PropTypes} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import ArticlePreview from 'components/ArticlePreview'
import WideList from 'components/WideList'
import Banner from 'components/Banner'
import Spinner from 'components/Spinner'
import Loader from 'components/Loader'


function createContent({
    BannerIcon,
    title,
    subtitle,
    content,
}) {
    return (
        <article>
            <Banner
                Icon={BannerIcon}
                title={title}
                subtitle={subtitle}
            />
            {content}
        </article>
    )
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


function LoadedContent({
    name,
    description,
    posts,
}) {
    return createContent({
        BannerIcon: radium(
            props => <i {...props} className='fa fa-tag' />
        ),
        title: name,
        subtitle: description,
        content: (
            <WideList>
                {posts.length === 0
                    ? 'There are no posts with this tag.'
                    : posts.map((post, key) => (
                        <ArticlePreview {...post} key={key} />
                    ))
                }
            </WideList>
        ),
    })
}


function Tagle({
    isLoading,
    loadError,
    loadDateTime,
    reload,
    ...unusedProps,
}) {
    return (
        <Loader
            // passes tag data onto *Content components
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


Tagle.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    posts: PropTypes.arrayOf(
        PropTypes.shape({
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
        })
    ),
}


export default radium(Tagle)
