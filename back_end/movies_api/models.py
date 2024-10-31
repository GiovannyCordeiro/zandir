from django.db import models
from uuid import uuid4

# Create your models here.
class Movies(models.Model):
    id_movie = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    title = models.CharField(max_length=400)
    year_realease = models.IntegerField()
    img_url = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"ID: {self.id_movie}, title: {self.title}, year: {self.year_realease}, img_url: {self.img_url}"