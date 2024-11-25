# Generated by Django 5.1.3 on 2024-11-16 04:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Empleado',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('telefono', models.CharField(max_length=20)),
                ('email', models.EmailField(max_length=100)),
                ('direccion', models.CharField(max_length=255)),
                ('rol', models.CharField(max_length=50)),
            ],
        ),
    ]
