# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BlogPost',
            fields=[
                ('id', models.AutoField(serialize=False, auto_created=True, verbose_name='ID', primary_key=True)),
                ('creation_date', models.DateField(auto_now_add=True)),
                ('modification_date', models.DateTimeField(auto_now=True)),
                ('title', models.CharField(max_length=100)),
                ('content', models.TextField()),
            ],
        ),
        migrations.AlterUniqueTogether(
            name='blogpost',
            unique_together=set([('creation_date', 'title')]),
        ),
    ]
