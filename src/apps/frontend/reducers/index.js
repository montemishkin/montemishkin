// third party imports
import {combineReducers} from 'redux'
import {createResponsiveStateReducer} from 'redux-responsive'
// local imports
import posts from './posts'
import projects from './projects'
import tags from './tags'


// combine and export the reducers
export default combineReducers({
    browser: createResponsiveStateReducer({medium: 700}),
    posts,
    projects,
    tags,
})
