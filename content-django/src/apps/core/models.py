# third party imports
from django.db import models
from taggit.managers import TaggableManager


class Article(models.Model):
    '''Base model for posts and projects.'''

    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    slug = models.SlugField(max_length=50, unique=True)
    title = models.CharField(max_length=100)
    subtitle = models.CharField(max_length=100)
    # tags = TaggableManager()
    content = models.TextField()
    # imageSrc: '/static/images/finchz_medium.jpg',
    # bannerColor: '#8CB2FF',


    class Meta:
        abstract = True


    def __str__(self):
        return self.title


class Project(Article):
    pass


class Post(Article):
    pass
