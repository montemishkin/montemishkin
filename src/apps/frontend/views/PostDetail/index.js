// third party imports
import React from 'react'
import fetch from 'isomorphic-fetch'
// import DisqusThread from 'react-disqus-thread'
// local imports
import styles from './styles'
import TagListInline from 'components/TagListInline'
import FormattedDate from 'components/FormattedDate'
import createDetailView from 'views/createDetailView'
import fetchPosts from 'actions/fetchPosts'
import failFetchPosts from 'actions/failFetchPosts'
import setPosts from 'actions/setPosts'


/**
 * Single blog post view.
 */
export default createDetailView({
    name: 'PostDetail',
    storeKey: 'posts',
    fetch(dispatch) {
        dispatch(fetchPosts())

        fetch('/api/posts')
            .then(response => response.json())
            .then(posts => dispatch(setPosts(posts)))
            .catch(error => dispatch(failFetchPosts(error)))
    },
    getItemContent: ({title, subtitle, bannerColor, creationDate, tags, content}) => (
        <div style={styles.container}>
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
    ),
})


// end of file
