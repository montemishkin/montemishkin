'''
WSGI configuration.
Exposes the WSGI callable as a module-level variable named `application`.
For more information on this file, see
https://docs.djangoproject.com/en/1.8/howto/deployment/wsgi/
'''

# python imports
import os
# third party imports
from django.core.wsgi import get_wsgi_application


# use live settings module
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.django.prod')

# expose `application` hook to application server
application = get_wsgi_application()
