'''
Root url router for project.
'''

# django imports
from django.conf.urls import include, url
from django.contrib import admin
# from django.conf.urls.static import static
# from django.conf import settings
# local imports
from .views import Home


# define the primary url patterns
urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api-auth/', include(
        'rest_framework.urls',
        namespace='rest_framework'
    )),
    url(r'^api/', include('monte_mishkin_com.apps.api.urls')),
    url(r'.*', Home.as_view()),
]

# # if the debug flag is on
# if settings.DEBUG:
#     # add the local static url configuration BEFORE the catch all
#     urlpatterns[-1:-1] = static(
#         settings.STATIC_URL,
#         document_root=settings.STATIC_ROOT
#     )


# end of file
