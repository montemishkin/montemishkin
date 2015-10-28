- CSS animations on logo
    - on home view, if logo clicked, bird dances a little bit
    - in nav and footer, if hovered, bird does some kind of bounce in animation and also gets hoverable blue color

- use these things:
    - propTypes
        - should you specify prop types even when you are just passing those props along to other components which already specify prop types?

- security / administration
    - set api permissions to only allow fetch (unless admin)
    - make admin panel
        - sessions, cookies, jwts, etc...

- UI / UX
    - what if bannerColor makes it hard to see link hover color in Article
    - hash links on posts and projects
    - improve use of symantic content
    - different variations of same bird logo for tag, post, project search views
        - if no image provided for the detail view then default to corresponding fa icon

- styling
    - rendered markdown styling
        - syntax highlight styling
    - overall DRY design of styling
        - colors
        - font sizes
        - magic numbers
    - react-router `Link` and `IndexLink` do not play well with radium
        - radium wrapping of `Link` does not work on `activeStyle` prop.  Thus, nav links don't transition *in* to the new background color even though they do transition *out* of it.
        - idk why, but `IndexLink` doesn't get the hover styling...
        - anyways, it would really be nice to be able to use `activeStyle`, especially on the nav bar.

- prepublish
    - is build-production actually building in production environment? No. gulp-env is working, but not cascading down into webpack-stream.
    - handle not found routes more professionally
        - style up NotFound component
        - if frontend app index doesnt find route, return NotFound
    - enable disqus
    - logo + favicon
    - minimize css
    - put your resume up
