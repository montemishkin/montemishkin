// node imports
import {readFileSync} from 'fs'
import {join as joinPaths} from 'path'
// local imports
import marked from 'lib/util/marked'


// TODO: put data in actual database...


const posts = [
    {
        slug: 'redux-responsive',
        title: 'Managing Responsive State in React',
        creationDate: '2015-09-07T00:00:36.049780Z',
        modificationDate: '2015-09-07T00:00:36.049780Z',
        tags: [
            {
                slug: 'golo-ba',
                name: 'Golo Ba',
            }, {
                slug: 'kid-is-good',
                name: 'God',
            },
        ],
    }, {
        slug: 'react-hello-world',
        title: 'Introduction to React',
        creationDate: '2015-09-07T00:00:36.049780Z',
        modificationDate: '2015-09-07T00:00:36.049780Z',
        tags: [
            {
                slug: 'adg',
                name: 'adg',
            }, {
                slug: 'golo-ba',
                name: 'Golo Ba',
            },
        ],
    },
]


export default posts.map(post => ({
    ...post,
    // render content from markdown to hmtl
    content: marked(
        // grab markdown content from filesystem
        readFileSync(joinPaths(__dirname, `${post.slug}.md`)).toString()
    ),
}))
