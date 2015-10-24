// third party imports
import React from 'react'
import fetch from 'isomorphic-fetch'
// import DisqusThread from 'react-disqus-thread'
// local imports
import styles from './styles'
import createDetailView from 'views/createDetailView'
import fetchTags from 'actions/fetchTags'
import failFetchTags from 'actions/failFetchTags'
import setTags from 'actions/setTags'


/**
 * Single blog tag view.
 */
export default createDetailView({
    name: 'TagDetail',
    storeKey: 'tags',
    fetch(dispatch) {
        dispatch(fetchTags())

        fetch('/api/tags')
            .then(response => response.json())
            .then(tags => dispatch(setTags(tags)))
            .catch(error => dispatch(failFetchTags(error)))
    },
    ItemContent: ({name}) => (
        <div style={styles.container}>
            <h3 style={styles.title}>
                {name}
            </h3>
        </div>
    ),
})


// end of file
