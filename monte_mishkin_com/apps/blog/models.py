# django imports
from django.db import models


class BlogPost(models.Model):
    '''
    Single blog post.
    '''
    creation_date = models.DateField(auto_now_add=True)
    modification_date = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=100)
    content = models.TextField()


    class Meta:
        unique_together = ('creation_date', 'title')


    def __str__(self):
        return self.title


# end of file
