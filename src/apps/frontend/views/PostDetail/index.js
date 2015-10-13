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
    store_key: 'blog',
    fetch: () => console.log('fetch posts from PostDetail'),
    items_key: 'posts',
    getItemContent: ({title, creation_date, tags, content}) => (
        <div style={styles.container}>
            <h3 style={styles.title}>
                {title}
            </h3>
            <div style={styles.post_container}>
                <div style={styles.date_and_tag_list_wrapper}>
                    <div style={styles.creation_date}>
                        <FormattedDate date={creation_date} />
                    </div>
                    <div style={styles.tag_list_wrapper}>
                        <TagListInline tags={tags} />
                    </div>
                </div>
                <div
                    style={styles.post_content}
                    dangerouslySetInnerHTML={{
                        __html: content,
                    }}
                />
            </div>
        </div>
    ),
})


// end of file
