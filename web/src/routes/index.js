// third party imports
import React from 'react'
import {Route, IndexRoute} from 'react-router'
// local imports
import Navigation from './Navigation'
import NotFound from './NotFound'
import About from './About'
import PostList from './PostList'
import PostDetail from './PostDetail'
import TagList from './TagList'
import TagDetail from './TagDetail'


export default (
    <Route path='/' component={Navigation}>
        <IndexRoute component={About} />
        <Route path='posts' component={PostList} />
        <Route path='posts/:slug' component={PostDetail} />
        <Route path='tags' component={TagList} />
        <Route path='tags/:slug' component={TagDetail} />
        <Route path='*' component={NotFound} />
    </Route>
)
