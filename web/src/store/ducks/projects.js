// local imports
import createDuck from './createDuck'
import {queryApiForAllProjects, queryApiForProjectsById} from 'api/projects'
import {mergeById as mergeTagsById} from './tags'


const duck = createDuck({
    prefix: 'projects',
    queryAll: queryApiForAllProjects,
    queryById: queryApiForProjectsById,
    processAll: (data, dispatch) => dispatch(mergeTagsById(data.tags)),
    mapAllToItems: data => data.projects,
    processById: (data, dispatch) => dispatch(mergeTagsById(data.tags)),
    mapByIdToItems: data => data.projectsById,
})


export const fetchAllIfNeeded = duck.fetchAllIfNeeded
export const fetchByIdIfNeeded = duck.fetchByIdIfNeeded
export const mergeAll = duck.mergeAll

export default duck.reducer
