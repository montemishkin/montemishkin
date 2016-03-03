// third party imports
import React from 'react'
import {Route, IndexRoute} from 'react-router'
// local imports
import Navigation from './Navigation'


export default (
    <Route path='/' component={Navigation}>
        <IndexRoute getComponent={(location, cb) => {
            require.ensure([], require => {
                cb(null, require('routes/Home').default)
            })
        }} />
        <Route path='about' getComponent={(location, cb) => {
            require.ensure([], require => {
                cb(null, require('routes/About').default)
            })
        }} />
        <Route path='posts' getComponent={(location, cb) => {
            require.ensure([], require => {
                cb(null, require('routes/PostList').default)
            })
        }} />
        <Route path='posts/:slug' getComponent={(location, cb) => {
            require.ensure([], require => {
                cb(null, require('routes/PostDetail').default)
            })
        }} />
        <Route path='tags' getComponent={(location, cb) => {
            require.ensure([], require => {
                cb(null, require('routes/TagList').default)
            })
        }} />
        <Route path='tags/:slug' getComponent={(location, cb) => {
            require.ensure([], require => {
                cb(null, require('routes/TagDetail').default)
            })
        }} />
        <Route path='*' getComponent={(location, cb) => {
            require.ensure([], require => {
                cb(null, require('routes/NotFound').default)
            })
        }} />
    </Route>
)
