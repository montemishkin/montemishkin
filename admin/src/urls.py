# third party imports
from django.conf.urls import include, url
from django.contrib import admin
# from django.conf.urls.static import static
# from django.conf import settings


# define the primary url patterns
urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^query/', include('src.apps.core.urls')),
]

# # if the debug flag is on
# if settings.DEBUG:
#     # add the local static url configuration BEFORE the catch all
#     urlpatterns[-1:-1] = static(
#         settings.STATIC_URL,
#         document_root=settings.STATIC_ROOT
#     )
