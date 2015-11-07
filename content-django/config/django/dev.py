'''
Django settings for use during development.
'''

# extend the base settings
from .base import *

# enable debugging support
DEBUG = True

# change the location we upload to in local dev
MEDIA_ROOT = os.path.join(RESOURCES_DIR, 'uploads')

# add django_toolbar to the installed apps
# INSTALLED_APPS += ('debug_toolbar', )

# Database
# https://docs.djangoproject.com/en/1.8/ref/settings/#databases
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db', 'db.sqlite3'),
    }
}
