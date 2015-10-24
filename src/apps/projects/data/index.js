// node imports
import {readFileSync} from 'fs'
import {join as joinPaths} from 'path'
// local imports
import marked from 'lib/util/marked'


// TODO: put data in actual database...


const projects = [
    {
        slug: 'react-hello-world',
        title: 'Introduction to React',
        creationDate: '2015-09-07T00:00:36.049780Z',
        modificationDate: '2015-09-07T00:00:36.049780Z',
        tags: [
            {
                slug: 'inter',
                name: 'Internet',
            }, {
                slug: 'as',
                name: 'time glup',
            },
        ],
    }, {
        slug: 'redux-responsive',
        title: 'Managing Responsive State in React',
        creationDate: '2015-09-07T00:00:36.049780Z',
        modificationDate: '2015-09-07T00:00:36.049780Z',
        tags: [],
    },
]


export default projects.map(project => ({
    ...project,
    // render content from markdown to hmtl
    content: marked(
        // grab markdown content from filesystem
        readFileSync(joinPaths(__dirname, `${project.slug}.md`)).toString()
    ),
}))
