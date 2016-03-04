- add posts
    - physics
    - redux responsive?
    - agitar?

- clean up logic
    - `TagDetail`
    - `PostDetail`
    - `Tagle`
    - `Article`
- DRY up
    - `TagDetail` + `PostDetail`?
    - `Tagle` + `Article`?
- tag list view should show tags with higher usage first
    - should also show number of posts that use that tag
- offer rss feed?
- a way of ensuring that each view renders a page title using helmet?
- tests. like seriously...
- be more secure
    - http://expressjs.com/en/advanced/best-practice-security.html

- branding
    - another variation of bird logo for tag search view

- development
    - move checks for production env into settings file, import from there
    - establish consistency with `export` vs `export default`
    - establish consistency with prop type checking.  or use flow
    - how to organize components vs views, deal with nesting, etc
    - use sass or scss

- optimization
    - caching
    - clustering
    - have nginx do more (rather than express):
        - serve static files (and favicon?)
        - gzip http://nginx.org/en/docs/http/ngx_http_gzip_module.html
    - google page speed insights
    - only load what data is actually needed for the current view
        - see "data flow" todos
    - only load what stylesheets are actually needed for the current view
    - cleanup logos
        - remove unused ones
        - cut away cruft on inkscape output

- data flow
    - relay
        - relay literally does not yet have universal support...
        - https://facebook.github.io/relay/docs
        - https://medium.com/@cpojer/relay-and-routing-36b5439bad9#.rwu6n8bpg
    - pagination
    - DRY up graphql queries

- accessiblity
    - improve use of semantic content

- styling
    - NotFound view
    - About view content should be rendered markdown.  Since articles' contents are rendered on the django server, you would have to have a separate markdown renderer that produced the exact same output...  Or, render articles' content isomorphically in js.
    - rendered markdown styling
        - would be nice to have the h* anchors hidden until hover the h* element
        - syntax highlighter fails at modern JS
    - overall DRY design
        - magic numbers
    - responsive
        - react complains when components connected to store.browser render differently on server vs client
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
            - doesn't solve problem of react complaining that server markup rendered differently (unless you explicitly pass window width on each request and mock `window.matchMedia`)
    - react-router `Link` and `IndexLink` do not play well with radium
        - radium wrapping of `Link` does not work on `activeStyle` prop.  Thus, nav links don't transition *in* to the new background color even though they do transition *out* of it.
        - idk why, but `IndexLink` doesn't get the hover styling...
            - its because radium only fixes styling for wrapped components that return raw DOM nodes.  `IndexLink` just returns `Link` with some props set, so the styling doesn't make it to the DOM nodes.
        - anyways, it would really be nice to be able to use `activeStyle`, especially on the nav bar.
