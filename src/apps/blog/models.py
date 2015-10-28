# django imports
from django.db import models
# third party imports
from taggit.managers import TaggableManager


class BlogPost(models.Model):
    '''
    Single blog post.
    '''
    slug = models.SlugField(max_length=50, unique=True)
    title = models.CharField(max_length=100)
    tags = TaggableManager()
    creation_date = models.DateTimeField(auto_now_add=True)
    modification_date = models.DateTimeField(auto_now=True)
    content = models.TextField()

    def __str__(self):
        return self.title


# end of file
