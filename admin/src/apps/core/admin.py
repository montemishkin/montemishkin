# import the django admin
from django.contrib import admin
# import the models to register
from .models import Post, Tag, TaggedItem


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}


# see: https://github.com/alex/django-taggit/blob/fb2d1cc45f1760c5317a62719f811b7be9a0a051/taggit/admin.py#L8-L18
class TaggedItemInline(admin.StackedInline):
    model = TaggedItem


# see: https://github.com/alex/django-taggit/blob/fb2d1cc45f1760c5317a62719f811b7be9a0a051/taggit/admin.py#L8-L18
@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    inlines = (TaggedItemInline,)
    list_display = ('name', 'slug', 'description')
    ordering = ('name', 'slug')
    search_fields = ('name', 'description')
    prepopulated_fields = {'slug': ('name',)}
