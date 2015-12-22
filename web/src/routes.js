// third party imports
import React from 'react'
import {Route, IndexRoute} from 'react-router'
// local imports
import Navigation from './views/Navigation'
import NotFound from './views/NotFound'
import About from './views/About'
import ProjectList from './views/ProjectList'
import ProjectDetail from './views/ProjectDetail'
import PostList from './views/PostList'
import PostDetail from './views/PostDetail'
import TagList from './views/TagList'
import TagDetail from './views/TagDetail'


export default (
    <Route path='/' component={Navigation}>
        <IndexRoute component={About} />
        <Route path='projects' component={ProjectList} />
        <Route path='projects/:slug' component={ProjectDetail}/>
        <Route path='posts' component={PostList} />
        <Route path='posts/:slug' component={PostDetail} />
        <Route path='tags' component={TagList} />
        <Route path='tags/:slug' component={TagDetail} />
        <Route path='*' component={NotFound} />
    </Route>
)
