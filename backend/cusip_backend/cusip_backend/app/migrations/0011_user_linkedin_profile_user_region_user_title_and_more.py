# Generated by Django 5.0.2 on 2024-04-16 02:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0010_message'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='linkedin_profile',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='region',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='title',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='year_of_study',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='bio',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]