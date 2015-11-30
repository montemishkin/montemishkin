# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import taggit.managers


class Migration(migrations.Migration):

    dependencies = [
        ('contenttypes', '0002_remove_content_type_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, verbose_name='ID', serialize=False)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('slug', models.SlugField(max_length=100, unique=True)),
                ('title', models.CharField(max_length=100)),
                ('subtitle', models.CharField(max_length=200)),
                ('content', models.TextField()),
                ('bannerImage', models.ImageField(blank=True, upload_to='')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, verbose_name='ID', serialize=False)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('slug', models.SlugField(max_length=100, unique=True)),
                ('title', models.CharField(max_length=100)),
                ('subtitle', models.CharField(max_length=200)),
                ('content', models.TextField()),
                ('bannerImage', models.ImageField(blank=True, upload_to='')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, verbose_name='ID', serialize=False)),
                ('name', models.CharField(max_length=100, verbose_name='Name', unique=True)),
                ('slug', models.SlugField(max_length=100, verbose_name='Slug', unique=True)),
                ('description', models.CharField(max_length=100, default='')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='TaggedItem',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, verbose_name='ID', serialize=False)),
                ('object_id', models.IntegerField(verbose_name='Object id', db_index=True)),
                ('content_type', models.ForeignKey(verbose_name='Content type', to='contenttypes.ContentType', related_name='core_taggeditem_tagged_items')),
                ('tag', models.ForeignKey(to='core.Tag', related_name='core_taggeditem_items')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='project',
            name='tags',
            field=taggit.managers.TaggableManager(help_text='A comma-separated list of tags.', through='core.TaggedItem', verbose_name='Tags', to='core.Tag'),
        ),
        migrations.AddField(
            model_name='post',
            name='tags',
            field=taggit.managers.TaggableManager(help_text='A comma-separated list of tags.', through='core.TaggedItem', verbose_name='Tags', to='core.Tag'),
        ),
    ]
