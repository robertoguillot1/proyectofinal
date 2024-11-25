# Generated by Django 5.1.3 on 2024-11-16 04:46

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('ordenes', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Pago',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('metodo_pago', models.CharField(max_length=50)),
                ('fecha_pago', models.DateTimeField()),
                ('valor_pago', models.DecimalField(decimal_places=2, max_digits=10)),
                ('id_orden', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ordenes.orden')),
            ],
        ),
    ]
