'''
GraphQL schema.
'''

# third party imports
import graphene
from graphene.contrib.django import DjangoNode
# local imports
from .models import Project as ProjectModel, Post as PostModel


class Post(DjangoNode):
    '''
    A single blog post.
    '''

    class Meta:
        model = PostModel


class Project(DjangoNode):
    '''
    A single project article.
    '''

    class Meta:
        model = ProjectModel


class Query(graphene.ObjectType):
    '''
    Root level query.
    '''

    posts = graphene.ListField(Post)
    projects = graphene.ListField(Project)
    post = graphene.Field(Post,
        slug=graphene.Argument(graphene.String)
    )
    project = graphene.Field(Project,
        slug=graphene.Argument(graphene.String)
    )

    @graphene.resolve_only_args
    def resolve_posts(self, **kwargs):
        return PostModel.objects.all()

    @graphene.resolve_only_args
    def resolve_projects(self, **kwargs):
        return ProjectModel.objects.all()

    @graphene.resolve_only_args
    def resolve_post(self, **kwargs):
        return PostModel.objects.get(slug=kwargs.get('slug'))

    @graphene.resolve_only_args
    def resolve_project(self, **kwargs):
        return ProjectModel.objects.get(slug=kwargs.get('slug'))


schema = graphene.Schema(query=Query)
