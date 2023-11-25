# Generated by Django 4.2.7 on 2023-11-19 22:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Direccion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('id_address', models.IntegerField()),
                ('address', models.TextField()),
            ],
            options={
                'db_table': 'direccion',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='PropietarioDireccion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('id_owner', models.IntegerField()),
                ('type_owner', models.TextField()),
                ('id_address', models.IntegerField()),
            ],
            options={
                'db_table': 'propietario_direccion',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Sucursal',
            fields=[
                ('branch_id', models.AutoField(primary_key=True, serialize=False)),
                ('branch_number', models.IntegerField()),
                ('branch_name', models.TextField()),
            ],
            options={
                'db_table': 'sucursal',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='TipoPropietario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('id_owner', models.TextField()),
                ('name_owner_s_c_e', models.TextField(db_column='name_owner_s.c.e')),
            ],
            options={
                'db_table': 'tipo_propietario',
                'managed': False,
            },
        ),
    ]