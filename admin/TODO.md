- django admin site
    - disable taggit app (since I have my own custom models and admin components)
    - post views
        - make it so tags selection only allows already created tags

- .gitignore should ignore /media/ except that i want to keep the images used for the fixtures
- i am probably using graphene very ineffectively.  it seems highly unlikely that I am supposed to access `self._root`, let alone have to implement a default resolver for each field...
- syntax highlighter fails at modern JS
