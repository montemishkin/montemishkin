'''
Django settings for use during development.
'''

# extend the base settings
from .base import *

# enable debugging support
DEBUG = True

# hardcoded secret key for development
SECRET_KEY = 'u1wn)3ngd0c09m^81_wv1!2-*jj9ahqg#jbr*=m%nt9h!afwad'

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
