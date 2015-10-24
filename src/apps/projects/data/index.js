// node imports
import {readFileSync} from 'fs'
import {join as joinPaths} from 'path'
// local imports
import markdown from 'util/markdown'


// TODO: put data in actual database...
// TODO: allow for subtitles


const projects = [
    {
        id: 0,
        slug: 'react-hello-world',
        title: 'Introduction to React',
        imageSrc: '/static/images/bird-logo.png',
        bannerColor: '#CACACA',
        creationDate: '2015-09-07T00:00:36.049780Z',
        modificationDate: '2015-09-07T00:00:36.049780Z',
        tags: [0, 3],
    }, {
        id: 1,
        slug: 'redux-responsive',
        title: 'Managing Responsive State in React',
        imageSrc: '/static/images/finchz_medium.jpg',
        bannerColor: '#F5FFC1',
        creationDate: '2015-09-07T00:00:36.049780Z',
        modificationDate: '2015-09-07T00:00:36.049780Z',
        tags: [1, 2, 4],
    },
]


export default projects.map(project => ({
    ...project,
    // render content from markdown to hmtl
    content: markdown(
        // grab markdown content from filesystem
        readFileSync(joinPaths(__dirname, `${project.slug}.md`)).toString()
    ),
}))
