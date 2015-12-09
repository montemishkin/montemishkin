'''
GraphQL schema.
'''

# third party imports
import graphene
from graphene.contrib.django import DjangoNode
# local imports
from .models import Post as PostModel, Project as ProjectModel
from .util import markdown


class DateTime(graphene.ObjectType):
    '''
    A full timestamp.
    '''
    tzinfo = graphene.StringField()
    year = graphene.IntField()
    month = graphene.IntField()
    day = graphene.IntField()
    hour = graphene.IntField()
    minute = graphene.IntField()
    second = graphene.IntField()
    microsecond = graphene.IntField()


class Tag(graphene.ObjectType):
    '''
    A single tag. Sometimes referred to as a keyword.
    '''
    id = graphene.IDField()
    url = graphene.StringField()
    name = graphene.StringField()
    description = graphene.StringField()

    def resolve_url(self, *args, **kwargs):
        # TODO: this URL route should not be hardcoded here
        return '/tags/' + self.slug


class Image(graphene.ObjectType):
    '''
    An image.
    '''
    url = graphene.StringField()
    width = graphene.IntField()
    height = graphene.IntField()

    def resolve_url(self, *args, **kwargs):
        # TODO: this URL route should REALLY not be hardcoded here
        return 'http://localhost:8001' + self.url


class Article(graphene.Interface):
    '''
    A single article.  Interface for posts and projects alike.
    '''
    id = graphene.IDField()
    created = graphene.Field(DateTime)
    modified = graphene.Field(DateTime)
    url = graphene.StringField()
    title = graphene.StringField()
    subtitle = graphene.StringField()
    tags = graphene.ListField(Tag)
    content = graphene.StringField()
    bannerImage = graphene.Field(Image)

    def resolve_tags(self, *args, **kwargs):
        # grab all the tags from the tag manager
        return self.tags.all()

    def resolve_content(self, *args, **kwargs):
        # render the article's markdown content into HTML
        return markdown(self.content)


class Post(Article):
    '''
    A single blog post.
    '''

    def resolve_url(self, *args, **kwargs):
        # TODO: this URL route should not be hardcoded here
        return '/posts/' + self.slug


class Project(Article):
    '''
    A single project article.
    '''

    def resolve_url(self, *args, **kwargs):
        # TODO: this URL route should not be hardcoded here
        return '/projects/' + self.slug


class Query(graphene.ObjectType):
    '''
    Root level query.
    '''
    posts = graphene.ListField(Post)
    projects = graphene.ListField(Project)
    # post = graphene.Field(Post,
    #     slug=graphene.Argument(graphene.String)
    # )
    # project = graphene.Field(Project,
    #     slug=graphene.Argument(graphene.String)
    # )

    @graphene.resolve_only_args
    def resolve_posts(self, *args, **kwargs):
        return PostModel.objects.all()

    @graphene.resolve_only_args
    def resolve_projects(self, *args, **kwargs):
        return ProjectModel.objects.all()

    # @graphene.resolve_only_args
    # def resolve_post(self, *args, **kwargs):
    #     return PostModel.objects.get(slug=kwargs.get('slug'))
    #
    # @graphene.resolve_only_args
    # def resolve_project(self, *args, **kwargs):
    #     return ProjectModel.objects.get(slug=kwargs.get('slug'))


schema = graphene.Schema(query=Query)
