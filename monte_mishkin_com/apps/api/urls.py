# django imports
from django.conf.urls import url, include
# restframework imports
from rest_framework.routers import DefaultRouter
# local imports
from .views import TagViewSet
from ..blog.views import BlogPostViewSet


router = DefaultRouter()
router.register(r'tags', TagViewSet)
router.register(r'blog-posts', BlogPostViewSet)


urlpatterns = [
    url(r'^', include(router.urls)),
]


# end of file
