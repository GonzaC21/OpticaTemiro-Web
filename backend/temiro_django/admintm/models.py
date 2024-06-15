from django.db import models

# Create your models here.

class Home(models.Model):
    # Otros campos del modelo Home, como título, contenido, etc.
    visitas = models.IntegerField(default=0)  # Campo para el contador de visitas del home