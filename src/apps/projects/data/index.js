// node imports
import {readFileSync} from 'fs'
import {join as joinPaths} from 'path'
// local imports
import markdown from 'util/markdown'


// TODO: put data in actual database...
// TODO: allow for subtitles


const projects = [
    {
        slug: 'react-hello-world',
        title: 'Introduction to React',
        bannerColor: '#CACACA',
        creationDate: '2015-09-07T00:00:36.049780Z',
        modificationDate: '2015-09-07T00:00:36.049780Z',
        tags: [
            {
                slug: 'inter',
                title: 'Internet',
            }, {
                slug: 'as',
                title: 'time glup',
            },
        ],
    }, {
        slug: 'redux-responsive',
        title: 'Managing Responsive State in React',
        bannerColor: '#F5FFC1',
        creationDate: '2015-09-07T00:00:36.049780Z',
        modificationDate: '2015-09-07T00:00:36.049780Z',
        tags: [],
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
