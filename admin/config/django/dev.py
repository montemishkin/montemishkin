'''
Django settings for use during development.
'''

# extend the base settings
from .base import *

# enable debugging support
DEBUG = True

# add dev tools
INSTALLED_APPS += (
    'debug_toolbar',
    'django_graphiql',
)

# Database
# https://docs.djangoproject.com/en/1.8/ref/settings/#databases
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db', 'db.sqlite3'),
    }
}


# graphiql settings

GRAPHIQL_GRAPHQL_URL = '/query/'
