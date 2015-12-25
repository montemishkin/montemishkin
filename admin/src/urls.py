# third party imports
from django.conf.urls import include, url
from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    url(r'^query/', include('src.apps.core.urls')),
    url(r'^.*/', include(admin.site.urls)),
]


# if in development environment
if settings.DEBUG:
    # add some routes right BEFORE catch all route
    urlpatterns[-1:-1] = [
        # graphiql for browsing graphql api
        url(r'^graphiql/', include('django_graphiql.urls')),
        # static files
        *static(settings.STATIC_URL, document_root=settings.STATIC_ROOT),
        # uploaded media
        *static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT),
    ]
