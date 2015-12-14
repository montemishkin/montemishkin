'''
Django settings for live deployment.
'''

# python imports
import os
# extend the base settings
from .base import *

# disable debugging support
DEBUG = False

# grab secret key from file in production
with open(os.path.abspath(os.path.join(__file__, os.pardir, 'secret-key'))) as secret_key_file:
    SECRET_KEY = secret_key_file.read().strip()

# List of allowed hostnames
# https://docs.djangoproject.com/en/1.8/ref/settings/#std:setting-ALLOWED_HOSTS
ALLOWED_HOSTS = []

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
