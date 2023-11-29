# Generated by Django 4.2.7 on 2023-11-16 18:19

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Clientes', '0003_remove_cliente_branch_id_cliente_branch'),
    ]

    operations = [
        migrations.AddField(
            model_name='cliente',
            name='usuario',
            field=models.OneToOneField(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]