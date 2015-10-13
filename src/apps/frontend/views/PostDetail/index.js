// third party imports
import React from 'react'
// import DisqusThread from 'react-disqus-thread'
// local imports
import styles from './styles'
import TagListInline from 'components/TagListInline'
import FormattedDate from 'components/FormattedDate'
import createDetailView from 'views/createDetailView'


/**
 * Single blog post view.
 */
export default createDetailView({
    name: 'PostDetail',
    storeKey: 'blog',
    fetch: () => console.log('fetch posts from PostDetail'),
    itemsKey: 'posts',
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
