# restframework imports
from rest_framework import serializers
# local imports
from .models import Project
from ..api.serializers import TagSerializer
from ..core.util import markdown



class ProjectSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)
    content = serializers.SerializerMethodField()

    def get_content(self, obj):
        return markdown(obj.content)

    class Meta:
        model = Project


# end of file
