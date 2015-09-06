# restframework imports
from rest_framework import serializers
# local imports
from .models import Project


class ProjectSerializer(serializers.ModelSerializer):
    tags = serializers.SerializerMethodField()

    def get_tags(self, obj):
        return [{'id': tag.id, 'name': tag.name} for tag in obj.tags.all()]

    class Meta:
        model = Project


# end of file
