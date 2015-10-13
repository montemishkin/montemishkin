// third party imports
import {combineReducers} from 'redux'
import {createResponsiveStateReducer} from 'redux-responsive'
// local imports
import blog from './blog'
import showcase from './showcase'
import tag_store from './tag_store'


// combine and export the reducers
export default combineReducers({
    browser: createResponsiveStateReducer({medium: 700}),
    blog,
    showcase,
    tag_store,
})
