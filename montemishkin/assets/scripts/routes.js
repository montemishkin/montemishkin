/*
 * Frontend URL routes.
 */

/* common react imports */
import React from 'react'
import {Route} from 'react-router'
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
let routes = (<Route handler={Root}>
    <Route name='home' path='/' handler={Home} />
    <Route name='about' path='about' handler={About} />
    <Route name='projects' path='projects' handler={ProjectSearch} />
    <Route name='project' path='projects/:slug' handler={Project}/>
    <Route name='blog' path='blog' handler={BlogSearch} />
    <Route name='blog-post' path='blog/:slug' handler={BlogPost} />
    <Route name='tags' path='tags' handler={TagSearch} />
    <Route name='tag' path='tags/:slug' handler={Tag} />
</Route>)


// export routes
export default routes


// end of file
