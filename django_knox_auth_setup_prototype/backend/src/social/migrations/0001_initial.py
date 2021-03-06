# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-08-02 11:07
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='SocialUser',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('social_platform', models.CharField(choices=[('facebook', 'Facebook')], max_length=20)),
                ('social_platform_user_id', models.CharField(max_length=20)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='socialuser', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
