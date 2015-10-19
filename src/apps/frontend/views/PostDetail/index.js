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
    getItemContent: ({title, creationDate, tags, content}) => (
        <div style={styles.container}>
            <h3 style={styles.title}>
                {title}
            </h3>
            <div style={styles.postContainer}>
                <div style={styles.dateAndTagListWrapper}>
                    <div style={styles.creationDate}>
                        <FormattedDate date={creationDate} />
                    </div>
                    <div style={styles.tagListWrapper}>
                        <TagListInline tags={tags} />
                    </div>
                </div>
                <div
                    style={styles.postContent}
                    dangerouslySetInnerHTML={{
                        __html: content,
                    }}
                />
            </div>
        </div>
    ),
})


// end of file
