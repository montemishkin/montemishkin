'''
GraphQL schema.
'''

# third party imports
import graphene
from graphene.contrib.django import DjangoNode
# local imports
from django.conf import settings
from .models import Post as PostModel, Tag as TagModel
from .util import markdown


class DateTime(graphene.ObjectType):
    '''
    A full timestamp.
    '''
    tzinfo = graphene.String()
    year = graphene.Int()
    month = graphene.Int()
    day = graphene.Int()
    hour = graphene.Int()
    minute = graphene.Int()
    second = graphene.Int()
    microsecond = graphene.Int()

    def resolve_tzinfo(self, *args, **kwargs):
        return self._root.tzinfo

    def resolve_year(self, *args, **kwargs):
        return self._root.year

    def resolve_month(self, *args, **kwargs):
        return self._root.month

    def resolve_day(self, *args, **kwargs):
        return self._root.day

    def resolve_hour(self, *args, **kwargs):
        return self._root.hour

    def resolve_minute(self, *args, **kwargs):
        return self._root.minute

    def resolve_second(self, *args, **kwargs):
        return self._root.second

    def resolve_microsecond(self, *args, **kwargs):
        return self._root.microsecond


class Tag(graphene.ObjectType):
    '''
    A single tag. Sometimes referred to as a keyword.
    '''
    id = graphene.ID()
    slug = graphene.String()
    name = graphene.String()
    description = graphene.String()

    def resolve_id(self, *args, **kwargs):
        return self._root.id

    def resolve_slug(self, *args, **kwargs):
        return self._root.slug

    def resolve_name(self, *args, **kwargs):
        return self._root.name

    def resolve_description(self, *args, **kwargs):
        return self._root.description


class Image(graphene.ObjectType):
    '''
    An image.
    '''
    url = graphene.String()
    width = graphene.Int()
    height = graphene.Int()

    def resolve_url(self, *args, **kwargs):
        # TODO: this URL route should REALLY not be hardcoded here
        return 'http://' + settings.HOST_NAME + self._root.url

    def resolve_width(self, *args, **kwargs):
        return self._root.width

    def resolve_height(self, *args, **kwargs):
        return self._root.height


class Post(graphene.ObjectType):
    '''
    A single blog post.
    '''
    id = graphene.ID()
    created = graphene.Field(DateTime)
    modified = graphene.Field(DateTime)
    slug = graphene.String()
    title = graphene.String()
    subtitle = graphene.String()
    tags = graphene.List(Tag)
    content = graphene.String()
    bannerImage = graphene.Field(Image)

    def resolve_id(self, *args, **kwargs):
        return self._root.id

    def resolve_created(self, *args, **kwargs):
        return self._root.created

    def resolve_modified(self, *args, **kwargs):
        return self._root.modified

    def resolve_slug(self, *args, **kwargs):
        return self._root.slug

    def resolve_title(self, *args, **kwargs):
        return self._root.title

    def resolve_subtitle(self, *args, **kwargs):
        return self._root.subtitle

    def resolve_bannerImage(self, *args, **kwargs):
        return self._root.bannerImage

    def resolve_tags(self, *args, **kwargs):
        # grab all tags from tag manager
        return self._root.tags.all()

    def resolve_content(self, *args, **kwargs):
        # render article's markdown content into HTML
        return markdown(self._root.content)


class Query(graphene.ObjectType):
    '''
    Root level query.
    '''
    posts = graphene.List(Post)
    tags = graphene.List(Tag)
    postsBySlug = graphene.List(Post,
        slugs=graphene.NonNull(graphene.List(graphene.String()))
    )
    tagsBySlug = graphene.List(Tag,
        slugs=graphene.NonNull(graphene.List(graphene.String()))
    )

    @graphene.resolve_only_args
    def resolve_posts(self, *args, **kwargs):
        return PostModel.objects.all()

    @graphene.resolve_only_args
    def resolve_tags(self, *args, **kwargs):
        return TagModel.objects.all()

    @graphene.resolve_only_args
    def resolve_postsBySlug(self, *args, **kwargs):
        return PostModel.objects.filter(slug__in=kwargs.get('slugs'))

    @graphene.resolve_only_args
    def resolve_tagsBySlug(self, *args, **kwargs):
        return TagModel.objects.filter(slug__in=kwargs.get('slugs'))


schema = graphene.Schema(query=Query)
