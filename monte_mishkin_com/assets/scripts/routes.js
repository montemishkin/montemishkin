/*
 * Frontend URL routes.
 */

/* common react imports */
import React from 'react'
import {Route} from 'react-router'
/* local imports */
import Root from './components/Root'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'


// define routes
let routes = (<Route handler={Root}>
    <Route name='home' path='/' handler={Home} />
    <Route name='about' path='about' handler={About} />
    <Route name='projects' path='projects' handler={Projects} />
    <Route name='blog' path='blog' handler={Blog} />
    <Route name='blog-date' path='blog/:creation_date' handler={Blog} />
    <Route name='blog-post' path='blog/:creation_date/:slug' handler={BlogPost} />
</Route>)


// export routes
export default routes


// end of file
