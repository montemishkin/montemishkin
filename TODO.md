- eliminate duplicate code between projects and blog posts (and tags, but less so)
    - post and project backend models can be the same (both should be able to have pictures, titles, subtitles, etc)

- CSS animations on logo
    - on home view, if logo clicked, bird dances a little bit
    - in nav and footer, if hovered, bird does some kind of bounce in animation and also gets hoverable blue color

- sage currently throws error if you navigate away from home route
    - animate is getting called with `isPaused === false` one last time even after component has been unmounted

- use these things:
    - [search indexing](https://github.com/olivernn/lunr.js)
    - propTypes

- workflow
    - task factories in gulpfile?

- security / administration
    - set api permissions to only allow fetch (unless admin)
    - make admin panel
        - sessions, cookies, jwts, etc...

- UI / UX
    - populate store with initial state from server
    - hash links on posts and projects

- styling
    - max width on nav and footer content?
    - are nav and footer too fat? is 20px padding too much on them?
    - (stretch of tag image, etc) for TagList component
    - rendered markdown styling
        - syntax highlight styling
    - overall DRY design of styling
        - colors
            - use [chromajs](https://github.com/gka/chroma.js) colors
        - magic numbers
    - react-router `Link` and `IndexLink` do not play well with radium
        - radium wrapping of `Link` does not work on `activeStyle` prop.  Thus, nav links don't transition *in* to the new background color even though they do transition *out* of it.
        - idk why, but `IndexLink` doesn't get the hover styling...
        - anyways, it would really be nice to be able to use `activeStyle`, especially on the nav bar.

- prepublish
    - is build-production actually building in production environment?
    - better "whoops" messages for ajax loading errors on front end
    - handle not found routes more professionally
    - enable disqus
    - logo + favicon
    - minimize css
