- blog post and project models
    - markdown support
        - http://stackoverflow.com/questions/11943089/github-flavored-markdown-in-python
    - syntax highlighting
    - project model
        - image field
    - require `slug` (not `title`) to be unique.  This is necessary since slugification is not injective (e.g. "don't" and "don.t" both get mapped to "don-t")

- rest api
    - set permissions to only allow fetch (unless admin)

- router
    - figure out what to do about trailing forward slashes
    - handle not found routes more professionally

- styling
    - overall DRY design of styling
    - move all colors into styles/colors.js
    - move all magic numbers (e.g. the padding of all children of root for infinity viewports) into styles/numerics.js
    - radium wrapping of react-router's `Link` does not work on `activeStyle` prop.  Thus, nav links don't transition *in* to the new background color even though they do transition *out* of it.

- general
    - remove `setTimeout` from ajax in `BlogPostActions`
    - link icons8
    - universal (isomorphic)
    - logo
    - favicon
    - handle styling (stretch of tag image, etc) for TagList component
    - better "whoops" messages for ajax loading errors on front end
    - propTypes
    - figure out url/file loader problem with webpack config + hardcoded urls

- blog / project lists
    - step up my search filter game? https://github.com/olivernn/lunr.js
