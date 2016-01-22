// third party imports
import {combineReducers} from 'redux'
import {createResponsiveStateReducer} from 'redux-responsive'
// local imports
import posts from './ducks/posts'
import tags from './ducks/tags'


export default combineReducers({
    browser: createResponsiveStateReducer({medium: 700}),
    posts,
    tags,
})
