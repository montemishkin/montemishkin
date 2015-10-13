// third party imports
import {combineReducers} from 'redux'
import {createResponsiveStateReducer} from 'redux-responsive'
// local imports
import blog from './blog'
import showcase from './showcase'
import tagStore from './tagStore'


// combine and export the reducers
export default combineReducers({
    browser: createResponsiveStateReducer({medium: 700}),
    blog,
    showcase,
    tagStore,
})
