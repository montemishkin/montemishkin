# django imports
from django.conf.urls import url, include
# restframework imports
from rest_framework.routers import DefaultRouter
# local imports
from .views import TagViewSet
from ..blog.views import BlogPostViewSet
from ..projects.views import ProjectViewSet


router = DefaultRouter()
router.register(r'tags', TagViewSet)
router.register(r'blog-posts', BlogPostViewSet)
router.register(r'projects', ProjectViewSet)


urlpatterns = [
    url(r'^', include(router.urls)),
]


# end of file
