// third party imports
import {combineReducers} from 'redux'
// local imports
import posts from './ducks/posts'
import tags from './ducks/tags'


export default combineReducers({
    posts,
    tags,
})
