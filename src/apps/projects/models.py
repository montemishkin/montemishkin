# django imports
from django.db import models
# third party imports
from taggit.managers import TaggableManager


class Project(models.Model):
    '''
    Single project post.
    '''
    slug = models.SlugField(max_length=50, unique=True)
    title = models.CharField(max_length=100)
    tags = TaggableManager()
    creation_date = models.DateTimeField(auto_now_add=True)
    modification_date = models.DateTimeField(auto_now=True)
    content = models.TextField()
    image = models.ImageField()

    def __str__(self):
        return self.title


# end of file
