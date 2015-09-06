# import the django admin
from django.contrib import admin
# import the models to register
from .models import Project


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    pass


# end of file
