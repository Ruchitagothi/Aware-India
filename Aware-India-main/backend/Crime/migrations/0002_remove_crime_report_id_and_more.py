# Generated by Django 5.1 on 2024-09-16 21:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Crime', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='crime_report',
            name='id',
        ),
        migrations.AlterField(
            model_name='crime_report',
            name='report_number',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
