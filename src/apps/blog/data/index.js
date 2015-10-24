// node imports
import {readFileSync} from 'fs'
import {join as joinPaths} from 'path'
// local imports
import markdown from 'util/markdown'


// TODO: put data in actual database...
// TODO: allow for subtitles


const posts = [
    {
        slug: 'redux-responsive',
        title: 'Managing Responsive State in React',
        subtitle: 'Isn\'t this fun?',
        bannerColor: '#8CB2FF',
        creationDate: '2015-09-07T00:00:36.049780Z',
        modificationDate: '2015-09-07T00:00:36.049780Z',
        tags: [
            {
                slug: 'golo-ba',
                title: 'Golo Ba',
            }, {
                slug: 'kid-is-good',
                title: 'God',
            },
        ],
    }, {
        slug: 'react-hello-world',
        title: 'Introduction to React',
        subtitle: 'I swear, it\'s easy.',
        bannerColor: '#CDB3FF',
        creationDate: '2015-09-07T00:00:36.049780Z',
        modificationDate: '2015-09-07T00:00:36.049780Z',
        tags: [
            {
                slug: 'adg',
                title: 'adg',
            }, {
                slug: 'golo-ba',
                title: 'Golo Ba',
            },
        ],
    },
]


export default posts.map(post => ({
    ...post,
    // render content from markdown to hmtl
    content: markdown(
        // grab markdown content from filesystem
        readFileSync(joinPaths(__dirname, `${post.slug}.md`)).toString()
    ),
}))
