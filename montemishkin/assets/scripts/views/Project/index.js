// third party imports
import React from 'react'
// import DisqusThread from 'react-disqus-thread'
// local imports
import styles from './styles'
import TagListInline from 'components/TagListInline'
import FormattedDate from 'components/FormattedDate'
import createDetailView from 'views/createDetailView'
import ProjectStore from 'stores/ProjectStore'
import ProjectActions from 'actions/ProjectActions'



export default createDetailView({
    name: 'ProjectDetail',
    store: ProjectStore,
    fetch: ProjectActions.fetchProjects,
    items_key: 'projects',
    getItemContent: ({title, image, creation_date, tags, content}) => (
        <div style={styles.container}>
            <div style={styles.project_heading_wrapper}>
                <img
                    style={styles.project_image}
                    alt={`"${title}" Project Thumbnail`}
                    src={image}
                />
                <div style={styles.project_heading_right}>
                    <h3 style={styles.title}>
                        {title}
                    </h3>
                    <div style={styles.date_and_tag_list_wrapper}>
                        <div style={styles.creation_date}>
                            <FormattedDate date={creation_date} />
                        </div>
                        <div style={styles.tag_list_wrapper}>
                            <TagListInline tags={tags} />
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={styles.project_content}
                dangerouslySetInnerHTML={{
                    __html: content,
                }}
            />
        </div>
    ),
})


// end of file
