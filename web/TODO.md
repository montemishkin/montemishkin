1. write content
1. design various logo variations


- CSS animations on logo
    - on home view, if logo clicked, bird dances a little bit
    - in nav and footer, if hovered, bird does some kind of bounce in animation and also gets hoverable blue color

- UI / UX
    - what if bannerColor makes it hard to see link hover color in Article?
    - hash links on posts and projects
    - improve use of semantic content
    - different variations of same bird logo for tag, post, project search views
        - if no image provided for the detail view then default to corresponding fa icon
    - overall accessibility
    - use number wells to give number of posts / projects tagged by a particular tag in tag detail view.

- styling
    - bump radium version to use user agent styling on server
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
    - favicon
    - put your resume up
