# Generated by Django 5.0.2 on 2024-02-29 14:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_user_cv_user_registration_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='bio',
            field=models.CharField(blank=True, max_length=164, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='course',
            field=models.CharField(blank=True, max_length=84, null=True),
        ),
    ]
