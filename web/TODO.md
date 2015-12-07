# vital

- relay
    - relay literally does not yet have universal support...
    - https://facebook.github.io/relay/docs
    - https://medium.com/@cpojer/relay-and-routing-36b5439bad9#.rwu6n8bpg

- styling
    - NotFound view
    - responsive

- manipulate page <title>

- pre-publish
    - cleanup logos
        - remove unused ones
        - cut away cruft on inkscape output
    - ensure that every single view is:
        - cross browser compatible
        - responsive
            - must be tested with phone emulation to account for viewport config
        - accessible
            - try navigating all pages with tab key
    - favicon
    - put your resume up
        - check both of the 2 links in the about view
    - enable disqus
    - google
        - [analytics](https://developers.google.com/analytics/devguides/collection/analyticsjs/single-page-applications)
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

- pagination
- tag search view should show tags with higher usage first
- improve use of semantic content
- another variation of bird logo for tag search view
- how to organize components vs views, deal with nesting, etc
- offer rss feed?
- use sass or scss

- accessiblity
    - `TabContainer` component used in `TagDetail` view is not accessible (try navigating with Tab key)
        - see [here](https://developer.mozilla.org/en-US/docs/Web/Accessibility/An_overview_of_accessible_web_applications_and_widgets) for tips on making it accessible.

- tests
    - in general
    - for util functions like `search`

- styling
    - About view content should be rendered markdown.  Since articles' contents are rendered on the django server, you would have to have a separate markdown renderer that produced the exact same output...  Or, render articles' content isomorphically in js.
    - rendered markdown styling
        - would be nice to have the h* anchors hidden until hover the h* element
        - syntax highlighter fails at modern JS
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
