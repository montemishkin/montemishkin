# third party imports
from django.conf.urls import include, url
from django.views.decorators.csrf import csrf_exempt
from graphene.contrib.django.views import GraphQLView
# local imports
from .schema import schema


urlpatterns = [
    url(r'.*', csrf_exempt(GraphQLView.as_view(schema=schema))),
]
