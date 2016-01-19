// third party imports
import {combineReducers} from 'redux'
import {createResponsiveStateReducer} from 'redux-responsive'
// local imports
import posts from './ducks/posts'
import projects from './ducks/projects'
import tags from './ducks/tags'


// combine and export reducers
export default combineReducers({
    browser: createResponsiveStateReducer({medium: 700}),
    posts,
    projects,
    tags,
})
