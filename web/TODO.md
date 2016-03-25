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
- footnote support in markdown
- tests. like seriously...
- be more secure
    - http://expressjs.com/en/advanced/best-practice-security.html

- development
    - establish consistency with `export` vs `export default`
    - establish consistency with prop type checking.  or use flow
    - how to organize components vs views, deal with nesting, etc

- optimization
    - caching
    - clustering
    - have nginx do more (rather than express):
        - serve static files (and favicon)
        - gzip http://nginx.org/en/docs/http/ngx_http_gzip_module.html
    - google page speed insights
    - only load what data is actually needed for the current view
        - see "data flow" todos

- data flow
    - relay
        - relay literally does not yet have universal support...
        - https://facebook.github.io/relay/docs
        - https://medium.com/@cpojer/relay-and-routing-36b5439bad9#.rwu6n8bpg
    - pagination.  no, infiniscroll
    - DRY up graphql queries

- accessiblity
    - improve use of semantic content

- styling
    - NotFound view
        - make grass taller so that view is responsive
    - About view content should be rendered markdown.  Since articles' contents are rendered on the django server, you would have to have a separate markdown renderer that produced the exact same output...  Or, render articles' content isomorphically in js.
