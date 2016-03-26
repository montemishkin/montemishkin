// third party imports
import React, {PropTypes} from 'react'
import {css} from 'aphrodite'
// local imports
import styles from './styles'
import ArticlePreview from 'components/ArticlePreview'
import WideList from 'components/WideList'
import Banner from 'components/Banner'
import Spinner from 'components/icons/Spinner'
import ErrorIcon from 'components/icons/Error'
import NatureLogo from 'components/logos/Nature'
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
            <section className={css(styles.contentContainer)}>
                <div className={css(styles.content)}>
                    Loading...
                </div>
            </section>
        ),
    })
}


function ErrorContent({error}) {
    return createContent({
        BannerIcon: ErrorIcon,
        title: 'Woops',
        subtitle: 'something went wrong...',
        content: (
            <section className={css(styles.contentContainer)}>
                <div className={css(styles.content)}>
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
        BannerIcon: NatureLogo,
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


export default Tagle
