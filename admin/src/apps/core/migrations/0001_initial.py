# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import taggit.managers
import colorful.fields


class Migration(migrations.Migration):

    dependencies = [
        ('contenttypes', '0002_remove_content_type_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('slug', models.SlugField(max_length=100, unique=True)),
                ('title', models.CharField(max_length=100)),
                ('subtitle', models.CharField(max_length=100)),
                ('content', models.TextField()),
                ('bannerImage', models.ImageField(upload_to='')),
                ('bannerColor', colorful.fields.RGBColorField()),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('slug', models.SlugField(max_length=100, unique=True)),
                ('title', models.CharField(max_length=100)),
                ('subtitle', models.CharField(max_length=100)),
                ('content', models.TextField()),
                ('bannerImage', models.ImageField(upload_to='')),
                ('bannerColor', colorful.fields.RGBColorField()),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(verbose_name='Name', max_length=100, unique=True)),
                ('slug', models.SlugField(verbose_name='Slug', max_length=100, unique=True)),
                ('description', models.CharField(default='', max_length=100)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='TaggedItem',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('object_id', models.IntegerField(verbose_name='Object id', db_index=True)),
                ('content_type', models.ForeignKey(verbose_name='Content type', related_name='core_taggeditem_tagged_items', to='contenttypes.ContentType')),
                ('tag', models.ForeignKey(to='core.Tag', related_name='core_taggeditem_items')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='project',
            name='tags',
            field=taggit.managers.TaggableManager(verbose_name='Tags', to='core.Tag', help_text='A comma-separated list of tags.', through='core.TaggedItem'),
        ),
        migrations.AddField(
            model_name='post',
            name='tags',
            field=taggit.managers.TaggableManager(verbose_name='Tags', to='core.Tag', help_text='A comma-separated list of tags.', through='core.TaggedItem'),
        ),
    ]
