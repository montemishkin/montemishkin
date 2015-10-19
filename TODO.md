- eliminate duplicate code between projects and blog posts (and tags, but less so)
- update propTypes
- load initial state into sage so that it starts off looking smooth and cool

- use these things:
    - [search indexing](https://github.com/olivernn/lunr.js)
    - [markdown rendering](https://github.com/chjj/marked)
    - [syntax highlighting](https://github.com/isagalaev/highlight.js)

- workflow
    - task factories in gulpfile?

- security / administration
    - set api permissions to only allow fetch (unless admin)
    - make admin panel
        - sessions, cookies, jwts, etc...

- UI / UX
    - hash links on posts and projects
    - handle not found routes more professionally

- styling
    - (stretch of tag image, etc) for TagList component
    - rendered markdown styling
    - syntax highlight styling
    - overall DRY design of styling
        - colors
        - magic numbers
    - react-router `Link` and `IndexLink` do not play well with radium
        - radium wrapping of `Link` does not work on `activeStyle` prop.  Thus, nav links don't transition *in* to the new background color even though they do transition *out* of it.
        - idk why, but `IndexLink` doesn't get the hover styling...

- prepublish
    - is build-production actually building in production environment?
    - better "whoops" messages for ajax loading errors on front end
    - enable disqus
    - logo + favicon
    - link icons8
