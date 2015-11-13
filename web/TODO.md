1. write content
1. design various logo variations


- CSS animations on logo
    - on home view, if logo clicked, bird dances a little bit
    - in nav and footer, if hovered, bird does some kind of bounce in animation and also gets hoverable blue color

- UI / UX
    - tag detail view should say something in the projects, posts tabs if there are no results
    - what if bannerColor makes it hard to see link hover color in Article?
    - hash links on posts and projects
    - improve use of semantic content
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
    - is build-production actually building in production environment?
        - No. gulp-env is working, but not cascading down into webpack-stream.
    - style up NotFound component
    - enable disqus
    - google analytics
    - logo + favicon
    - put your resume up
