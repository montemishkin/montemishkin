# third party imports
from django.db import models
from taggit.managers import TaggableManager
from colorful.fields import RGBColorField


class Article(models.Model):
    '''
    Base model for posts and projects.
    '''
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    slug = models.SlugField(max_length=100, unique=True)
    title = models.CharField(max_length=100)
    subtitle = models.CharField(max_length=100)
    tags = TaggableManager()
    content = models.TextField()
    bannerImage = models.ImageField()
    bannerColor = RGBColorField()

    class Meta:
        abstract = True

    def __str__(self):
        return self.title


class Project(Article):
    '''
    Single article about a project.
    '''
    pass


class Post(Article):
    '''
    Single blog post.
    '''
    pass
