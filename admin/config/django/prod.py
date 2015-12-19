'''
Django settings for live deployment.
'''

# python imports
import os
# extend the base settings
from .base import *

# disable debugging support
DEBUG = False

# name of host to use when forming URL's
# TODO: seems wrong to need this, but currently needed for image URL's...
HOST_NAME = 'admin.monte.mishkin.com'

# List of allowed hostnames
# https://docs.djangoproject.com/en/1.8/ref/settings/#std:setting-ALLOWED_HOSTS
ALLOWED_HOSTS = ['admin.monte.mishkin.com', 'www.admin.monte.mishkin.com']

# grab secret key from file in production
with open(os.path.abspath(os.path.join(__file__, os.pardir, 'secret-key'))) as secret_key_file:
    SECRET_KEY = secret_key_file.read().strip()

# Database
# https://docs.djangoproject.com/en/1.8/ref/settings/#databases
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': '',
        'USER': '',
        'PASSWORD': '',
        'HOST': 'localhost',
        'PORT': '',
    }
}
