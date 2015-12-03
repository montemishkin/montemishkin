# vital

- relay
    - relay literally does not yet have universal support...
    - https://facebook.github.io/relay/docs
    - https://medium.com/@cpojer/relay-and-routing-36b5439bad9#.rwu6n8bpg

- styling
    - overall accessibility
    - hash links on posts and projects (functionality has been added, but needs styling)
    - if no image provided for a detail view then default to corresponding fa icon (functionality is in place but ridiculous hack in server.js prevents frontend from ever getting an article with an empty string as the image source)
    - 1px black border to bottom of banner and top of footer?
    - sections in Bio and items in WideList should get width and maxWidth styles to match content of detail views
    - rendered markdown styling
        - syntax highlight styling

- pre-publish
    - is build-production actually building in production environment?
        - No. gulp-env is working, but not cascading down into webpack-stream.
    - style up NotFound component
    - ensure that every single view is:
        - responsive
            - must be tested with phone emulation to account for viewport config
        - accessible
            - try navigating all pages with tab key
    - favicon
    - put your resume up
        - check both of the 2 links in the about view
    - enable disqus
    - google
        - analytics
        - page speed insights

- post-publish
    - have github.io redirect to this
    - add projects
        - this website
        - redux responsive?
        - agitar?
    - add posts
        - hello
        - physics


# non-vital

- tag search view should show tags with higher usage first
- improve use of semantic content
- another variation of bird logo for tag search view
- offer rss feed?
- use sass or scss

- tests
    - in general
    - for util functions like `search`

- styling
    - CSS animations on birds?
    - overall DRY design
        - magic numbers
    - responsive
        - pass window width from request to redux store initial state so that react doesn't complain that components connected to store.browser rendered differently on server vs client
        - use radium media queries?
            ```js
            import {mediaQueries} from 'styles/js/mediaQueries'

            export default {
                content: {
                    color: 'red',

                    [mediaQueries.medium]: {
                        color: 'blue',
                    },
                },
            }
            ```
            - doesn't solve problem of responsively reordering elements in Footer
    - react-router `Link` and `IndexLink` do not play well with radium
        - radium wrapping of `Link` does not work on `activeStyle` prop.  Thus, nav links don't transition *in* to the new background color even though they do transition *out* of it.
        - idk why, but `IndexLink` doesn't get the hover styling...
        - anyways, it would really be nice to be able to use `activeStyle`, especially on the nav bar.
