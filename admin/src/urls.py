# third party imports
from django.conf.urls import include, url
from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^query/', include('src.apps.core.urls')),
]


# if in development environment
if settings.DEBUG:
    # add graphiql route for browsing graphql api
    urlpatterns += [url(r'^graphiql/', include('django_graphiql.urls'))]
    # add static files route
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    # add media files route
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
