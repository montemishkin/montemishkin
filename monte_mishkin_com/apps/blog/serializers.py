# restframework imports
from rest_framework import serializers
# local imports
from .models import BlogPost


class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost


# end of file
