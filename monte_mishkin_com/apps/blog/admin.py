# import the django admin
from django.contrib import admin
# import the models to register
from .models import BlogPost


@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    pass


# end of file
