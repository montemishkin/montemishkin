# vital

- proof read resume

- post-publish
    - add posts
        - hello
        - physics
        - this website
        - redux responsive?
        - agitar?
    - check that every single view is:
        - cross browser compatible
        - responsive
        - mobile friendly
        - accessible


# non-vital

- tag search view should show tags with higher usage first
    - should also show number of posts that use that tag
- offer rss feed?
- a better way of ensuring that each view renders a page title using helmet
- tests. like seriously...

- branding
    - another variation of bird logo for tag search view

- development
    - how to organize components vs views, deal with nesting, etc
    - use sass or scss

- optimization
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
    - only load what is actually needed for the current view
    - DRY up graphql queries

- accessiblity
    - improve use of semantic content
    - `TabContainer` component used in `TagDetail` view is not accessible (try navigating with Tab key)
        - see [here](https://developer.mozilla.org/en-US/docs/Web/Accessibility/An_overview_of_accessible_web_applications_and_widgets) for tips on making it accessible.

- styling
    - NotFound view
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
