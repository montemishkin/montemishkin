# import the django admin
from django.contrib import admin
# import the models to register
from .models import BlogPost


@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}


# end of file
