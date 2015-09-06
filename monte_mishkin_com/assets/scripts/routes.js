/*
 * Frontend URL routes.
 */

/* common react imports */
import React from 'react'
import {Route} from 'react-router'
/* local imports */
import Root from './components/Root'
import HomeView from './components/HomeView'
import AboutView from './components/AboutView'
import ProjectSearchView from './components/ProjectSearchView'
import ProjectView from './components/ProjectView'
import BlogSearchView from './components/BlogSearchView'
import BlogPostView from './components/BlogPostView'
import TagSearchView from './components/TagSearchView'


// define routes
let routes = (<Route handler={Root}>
    <Route name='home' path='/' handler={HomeView} />
    <Route name='about' path='about' handler={AboutView} />
    <Route name='projects' path='projects' handler={ProjectSearchView} />
    <Route name='project' path='projects/:slug' handler={ProjectView}/>
    <Route name='blog' path='blog' handler={BlogSearchView} />
    <Route name='blog-post' path='blog/:slug' handler={BlogPostView} />
    <Route name='tags' path='tags' handler={TagSearchView} />
</Route>)


// export routes
export default routes


// end of file
