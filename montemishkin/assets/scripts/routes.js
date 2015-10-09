/*
 * Frontend URL routes.
 */

/* common react imports */
import React from 'react'
import {Route, IndexRoute} from 'react-router'
/* local imports */
import Root from './views/Root'
import Home from './views/Home'
import About from './views/About'
import ProjectSearch from './views/ProjectSearch'
import Project from './views/Project'
import BlogSearch from './views/BlogSearch'
import BlogPost from './views/BlogPost'
import TagSearch from './views/TagSearch'
import Tag from './views/Tag'


// define routes
let routes = (<Route path='/' component={Root}>
    <IndexRoute component={Home} />
    <Route path='about' component={About} />
    <Route path='projects' component={ProjectSearch} />
    <Route path='projects/:slug' component={Project}/>
    <Route path='blog' component={BlogSearch} />
    <Route path='blog/:slug' component={BlogPost} />
    <Route path='tags' component={TagSearch} />
    <Route path='tags/:slug' component={Tag} />
</Route>)


// export routes
export default routes


// end of file
