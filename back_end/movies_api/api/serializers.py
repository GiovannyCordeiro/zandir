from rest_framework import serializers
from movies_api import models


class MoviesSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Movies
        fields = '__all__'