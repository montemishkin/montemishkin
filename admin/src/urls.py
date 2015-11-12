# third party imports
from django.conf.urls import include, url
from django.contrib import admin
from django.conf import settings


urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^query', include('src.apps.core.urls')),
]


# if in development stage
if settings.DEBUG:
    urlpatterns += [
        url(r'^graphiql/', include('django_graphiql.urls')),
    ]
