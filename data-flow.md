1. api emits nested data
2. client normalizes data and puts it into store
3. views grab data from store, nest it, and consume

- ProjectSearch
    - all projects
    - only the tags used by a project
- ProjectDetail
    - only that project
    - only its tags

- PostSearch
    - all posts
    - only the tags used by a post
- PostDetail
    - only that post
    - only its tags

- TagSearch
    - all tags
- TagDetail
    - that tag
    - all posts which use that tag
        - all tags used by such a post
    - all projects which use that tag
        - all tags used by such a project
