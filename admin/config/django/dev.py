'''
Django settings for use during development.
'''

# extend the base settings
from .base import *

# enable debugging support
DEBUG = True

# name of host to use when forming URL's
# TODO: seems wrong to need this, but currently needed for image URL's...
HOST_NAME = 'localhost:8001'


CORS_ORIGIN_ALLOW_ALL = True


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
