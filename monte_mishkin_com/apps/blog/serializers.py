# restframework imports
from rest_framework import serializers
# misc third party imports
from markdown import markdown
# local imports
from .models import BlogPost


class BlogPostSerializer(serializers.ModelSerializer):
    tags = serializers.SerializerMethodField()
    content = serializers.SerializerMethodField()

    def get_tags(self, obj):
        return [{'id': tag.id, 'name': tag.name} for tag in obj.tags.all()]

    def get_content(self, obj):
        return markdown(obj.content)

    class Meta:
        model = BlogPost


# end of file
