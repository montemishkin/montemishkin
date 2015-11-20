// third party imports
import React from 'react'
import {Route, IndexRoute} from 'react-router'
// local imports
import Navigation from './views/Navigation'
import NotFound from './views/NotFound'
import Home from './views/Home'
import About from './views/About'
import ProjectSearch from './views/ProjectSearch'
import ProjectDetail from './views/ProjectDetail'
import PostSearch from './views/PostSearch'
import PostDetail from './views/PostDetail'
import TagSearch from './views/TagSearch'
import TagDetail from './views/TagDetail'


export default (
    <Route path='/'>
        <IndexRoute component={Home} />
        <Route component={Navigation}>
            <Route path='about' component={About} />
            <Route path='projects' component={ProjectSearch} />
            <Route path='projects/:slug' component={ProjectDetail}/>
            <Route path='posts' component={PostSearch} />
            <Route path='posts/:slug' component={PostDetail} />
            <Route path='tags' component={TagSearch} />
            <Route path='tags/:slug' component={TagDetail} />
            <Route path='*' component={NotFound} />
        </Route>
    </Route>
)
