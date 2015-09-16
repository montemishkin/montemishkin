- blog post and project models
    - right now, tags are required.  is this ok with you?
    - project model
        - image field

- rest api
    - set permissions to only allow fetch (unless admin)

- router
    - figure out what to do about trailing forward slashes
    - handle not found routes more professionally

- styling
    - (stretch of tag image, etc) for TagList component
    - style rendered markdown
    - choose syntax highlighting styling
    - overall DRY design of styling
    - move all colors into styles/colors.js
    - move all magic numbers (e.g. the padding of all children of root for infinity viewports) into styles/numerics.js
    - radium wrapping of react-router's `Link` does not work on `activeStyle` prop.  Thus, nav links don't transition *in* to the new background color even though they do transition *out* of it.

- general
    - remove `setTimeout` from ajax in all fetch actions
    - link icons8
    - universal (isomorphic)
    - eliminate large amount of duplicate code between projects and blog posts (and tags, but less so)
    - logo
    - favicon
    - better "whoops" messages for ajax loading errors on front end
    - propTypes
    - enable disqus
    - figure out url/file loader problem with webpack config + hardcoded urls
        - also, `MEDIA_ROOT` and `MEDIA_URL` in django settings

- blog / project lists
    - step up my search filter game? https://github.com/olivernn/lunr.js
