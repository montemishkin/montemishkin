# third party imports
from django.db import models
from taggit.managers import TaggableManager
from taggit.models import TagBase, GenericTaggedItemBase


# see: https://django-taggit.readthedocs.org/en/latest/custom_tagging.html
class Tag(TagBase):
    description = models.CharField(max_length=100, default='')


# see: https://django-taggit.readthedocs.org/en/latest/custom_tagging.html
class TaggedItem(GenericTaggedItemBase):
    tag = models.ForeignKey(Tag,
        related_name='%(app_label)s_%(class)s_items'
    )


class Post(models.Model):
    '''
    Single blog post.
    '''
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    slug = models.SlugField(max_length=100, unique=True)
    title = models.CharField(max_length=100)
    subtitle = models.CharField(max_length=200)
    tags = TaggableManager(through=TaggedItem)
    content = models.TextField()

    def __str__(self):
        return self.title
