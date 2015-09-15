# restframework imports
from rest_framework import serializers
# misc third party imports
from taggit.models import Tag


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag


# end of file
