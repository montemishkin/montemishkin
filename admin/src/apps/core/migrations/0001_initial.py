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
                ('id', models.AutoField(primary_key=True, auto_created=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('slug', models.SlugField(unique=True, max_length=100)),
                ('title', models.CharField(max_length=100)),
                ('subtitle', models.CharField(max_length=200)),
                ('content', models.TextField()),
                ('bannerImage', models.ImageField(upload_to='', blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(verbose_name='Name', unique=True, max_length=100)),
                ('slug', models.SlugField(verbose_name='Slug', unique=True, max_length=100)),
                ('description', models.CharField(default='', max_length=100)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='TaggedItem',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, serialize=False, verbose_name='ID')),
                ('object_id', models.IntegerField(verbose_name='Object id', db_index=True)),
                ('content_type', models.ForeignKey(related_name='core_taggeditem_tagged_items', to='contenttypes.ContentType', verbose_name='Content type')),
                ('tag', models.ForeignKey(related_name='core_taggeditem_items', to='core.Tag')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='post',
            name='tags',
            field=taggit.managers.TaggableManager(to='core.Tag', help_text='A comma-separated list of tags.', verbose_name='Tags', through='core.TaggedItem'),
        ),
    ]
