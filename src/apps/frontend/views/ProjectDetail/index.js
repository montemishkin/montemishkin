// third party imports
import React from 'react'
import fetch from 'isomorphic-fetch'
// import DisqusThread from 'react-disqus-thread'
// local imports
import styles from './styles'
import TagListInline from 'components/TagListInline'
import FormattedDate from 'components/FormattedDate'
import createDetailView from 'views/createDetailView'
import fetchProjects from 'actions/fetchProjects'
import failFetchProjects from 'actions/failFetchProjects'
import setProjects from 'actions/setProjects'



export default createDetailView({
    name: 'ProjectDetail',
    storeKey: 'projects',
    fetch(dispatch) {
        dispatch(fetchProjects())

        fetch('/api/projects')
            .then(response => response.json())
            .then(projects => dispatch(setProjects(projects)))
            .catch(error => dispatch(failFetchProjects(error)))
    },
    getItemContent: ({title, image, creationDate, tags, content}) => (
        <div style={styles.container}>
            <div style={styles.projectHeadingWrapper}>
                <img
                    style={styles.projectImage}
                    alt={`"${title}" Project Thumbnail`}
                    src={image}
                />
                <div style={styles.projectHeadingRight}>
                    <h3 style={styles.title}>
                        {title}
                    </h3>
                    <div style={styles.dateAndTagListWrapper}>
                        <div style={styles.creationDate}>
                            <FormattedDate date={creationDate} />
                        </div>
                        <div style={styles.tagListWrapper}>
                            <TagListInline tags={tags} />
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={styles.projectContent}
                dangerouslySetInnerHTML={{
                    __html: content,
                }}
            />
        </div>
    ),
})


// end of file
